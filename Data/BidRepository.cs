public class BidRepository
{
    private readonly HouseDbContext context;

    public BidRepository(HouseDbContext context)
    {
        this.context = context
    }
}