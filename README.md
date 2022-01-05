# Kongzi: Guided Meditations on Ancient Chinese Philosophy

This was my final project for a class I took fall of 2021, Classical Chinese Ethical and Political Theory (Gen Ed 1091). 

Kongzi, which means "Master Kǒng", is the Chinese name for Confucius. Much like Plato did for Western Philosophy, Kongzi set the stage for all future Chinese philosophical thought. 

This basic web app  takes the user through meditations based on the works of Confucius, Mozi, Xunzi, Mengzi, and Laozi. 

The stages of the meditations are stored in a MongoDB database collection, with the connections between the stages stored in a separate collection which defines which stages precede each other, and in what direction (Right, Left, Up, Down, or In) the user moves to get to the next step. 

In the future, where I would like to take this is by adding more animation and graphics to the slide transitions, and then allowing users to create, save, and share their own meditations.

The app is deployed on Heroku, and can be accessed by going to [kongzi.herokuapp.com](http://kongzi.herokuapp.com)
