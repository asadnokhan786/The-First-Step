## Resources Used
- [Vite Docs](https://vite.dev/guide/)
- [Django Rest Framework Docs](https://www.django-rest-framework.org/)
- [Django Docs](https://docs.djangoproject.com/en/6.0/)

## Development Process (Backend)
1. Setup backend using django start project
2. Created steps app using create app
3. Integrated django rest framework with project
4. Created model, view, and serializer for steps
5. Modified settings to support cors and frontend host
6. Modified settings to support anyone writing to endpoints

## Development Process (Frontend)
1. Setup frontend using vite create react app
2. Removed App.jsx to include only button and use state
3. Hard coded base url and created async fetch requests
4. Wrapped get request within an empty use effect to call on file render by default
5. Wrapped post and put request within a button click handler to handle which request is appropriate to send
6. Created another use state to assess if the first step exists in the db to allow api function calls to not be rigid