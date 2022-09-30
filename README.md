## ASPNETWebAPIReact
> This project includes a solution built with ASP.NET Core Web API and React. The end-to-end SPA (Secure Single-Page Application) consists of a simple React application which accesses the API and using create, read, update and delete operations to manipulate the data, which will be available to view via SQLite. This solution will help build my knowledge in this field and have hands-on experience with real world applications.


## Project Contents

- API project - Includes the back-end functionality 
- React project - Includes the front-end functionality

## API

- DB connection class (HouseDBContext)
- House & Bid Entities - Classes which includes proprieties (getters & setters)
- Bid & House Repositories - Define methods for each entity (Get, Add, Update & Delete)
- Seed Data class which populates the DB with pre-defined data
- Server-side validation (MiniValidator)


## React

- Consuming end-points from the API
- Custom Hooks and useEffect
- Caching and re-fetching with react-query
- Formatting incoming data and displaying API status info
- Use routing (BrowserRouter)
- Use navigation (useNavigate())
- Displaying validation errors
- Uploading images
