const posts = [
  {
    id: 1,
    title: "Post 1",
    body: "The sun dipped below the horizon, casting a warm glow across the tranquil meadow. The rustling leaves whispered secrets carried by the gentle breeze. A symphony of crickets played in the background, harmonizing with the distant calls of nocturnal creatures. As the moon ascended in the night sky, it painted a silver canvas, revealing the beauty of the sleeping world. Shadows danced on the edges of ",
    img: `https://avatars.githubusercontent.com/u/88656609?v=4`,
  },
  {
    id: 2,
    title: "Post 2",
    body: "The sun dipped below the horizon, casting a warm glow across the tranquil meadow. The rustling leaves whispered secrets carried by the gentle breeze. A symphony of crickets played in the background, harmonizing with the distant calls of nocturnal creatures. As the moon ascended in the night sky, it painted a silver canvas, revealing the beauty of the sleeping world. Shadows danced on the edges of ",
    img: `https://avatars.githubusercontent.com/u/88656609?v=4`,
  },
  {
    id: 3,
    title: "Post 3",
    body: "The sun dipped below the horizon, casting a warm glow across the tranquil meadow. The rustling leaves whispered secrets carried by the gentle breeze. A symphony of crickets played in the background, harmonizing with the distant calls of nocturnal creatures. As the moon ascended in the night sky, it painted a silver canvas, revealing the beauty of the sleeping world. Shadows danced on the edges of ",
    img: `https://avatars.githubusercontent.com/u/88656609?v=4`,
  },
  {
    id: 4,
    title: "Post 4",
    body: "The sun dipped below the horizon, casting a warm glow across the tranquil meadow. The rustling leaves whispered secrets carried by the gentle breeze. A symphony of crickets played in the background, harmonizing with the distant calls of nocturnal creatures. As the moon ascended in the night sky, it painted a silver canvas, revealing the beauty of the sleeping world. Shadows danced on the edges of ",
    img: `https://avatars.githubusercontent.com/u/88656609?v=4`,
  },
  {
    id: 5,
    title: "Post 5",
    body: "The sun dipped below the horizon, casting a warm glow across the tranquil meadow. The rustling leaves whispered secrets carried by the gentle breeze. A symphony of crickets played in the background, harmonizing with the distant calls of nocturnal creatures. As the moon ascended in the night sky, it painted a silver canvas, revealing the beauty of the sleeping world. Shadows danced on the edges of ",
    img: `https://avatars.githubusercontent.com/u/88656609?v=4`,
  },
  {
    id: 6,
    title: "Post 6",
    body: "The sun dipped below the horizon, casting a warm glow across the tranquil meadow. The rustling leaves whispered secrets carried by the gentle breeze. A symphony of crickets played in the background, harmonizing with the distant calls of nocturnal creatures. As the moon ascended in the night sky, it painted a silver canvas, revealing the beauty of the sleeping world. Shadows danced on the edges of ",
    img: `https://avatars.githubusercontent.com/u/88656609?v=4`,
  },
];

export const getPosts = () => {
  try {
    return posts;
  } catch (err) {
    console.log(err);
  }
};
export const getPost = (id) => {
  try {
    return posts.find((post) => post.id === id);
  } catch {
    console.log("error");
  }
};
