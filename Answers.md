1. What problem does the context API help solve?

- The context API help with passing the props in a very deeply nested grandchild in the Components.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-Action are mosly object that tell the reducer how to cheng the initialState.
-Reducers are pure function that return the state. It is triggered  by the action with it action type.
-Store is the object that hold all the State

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

-The application is the most important part of React, it is the global state. The component is their local state.  

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

-redux-thunk is a middleware that lets you call action creators that return a function instead of an action object. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

-I think redux is pretty awesome state management, It does take time to understand it and make all the code but after that, it's super easy to use. 
