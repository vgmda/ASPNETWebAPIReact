using Microsoft.AspNetCore.Mvc;
using MiniValidation;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();
builder.Services.AddDbContext<HouseDbContext>(options =>
options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking));
builder.Services.AddScoped<IHouseRepository, HouseRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Add CORS Policy
app.UseCors(p => p.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod().AllowCredentials());

app.UseHttpsRedirection();


app.MapGet("/houses", (IHouseRepository repo) => repo.GetAll()).Produces<HouseDto[]>(StatusCodes.Status200OK);
app.MapGet("/house/{houseId:int}", async (int houseId, IHouseRepository repo) =>
{
    var house = await repo.Get(houseId);
    if (house == null)
    {
        return Results.Problem($"House with ID: {houseId} was not found.", statusCode: 404);
    }

    return Results.Ok(house);
}).ProducesProblem(404).Produces<HouseDetailDto>(StatusCodes.Status200OK);

// Create end-point
app.MapPost("/houses", async ([FromBody] HouseDetailDto dto, IHouseRepository repo) =>
{
    var newHouse = repo.Add(dto);

    return Results.Created($"/house/{newHouse.Id}", newHouse);

}).Produces<HouseDetailDto>(StatusCodes.Status201Created);

// Update end-point
app.MapPut("/houses", async ([FromBody] HouseDetailDto dto, IHouseRepository repo) =>
{
    if (await repo.Get(dto.Id) == null)
        return Results.Problem($"House {dto.Id} not found", statusCode: 404);

    var updatedHouse = await repo.Update(dto);

    return Results.Ok(updatedHouse);

}).ProducesProblem(404).Produces<HouseDetailDto>(StatusCodes.Status200OK);

// Delete end-point
app.MapDelete("/houses/{houseId:int}", async (int houseId, IHouseRepository repo) =>
{
    if (await repo.Get(houseId) == null)
        return Results.Problem($"House {houseId} not found", statusCode: 404);

    await repo.Delete(houseId);

    return Results.Ok();
}).ProducesProblem(404).Produces(StatusCodes.Status200OK);

app.Run();
