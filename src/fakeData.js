export const posts = [
  {
    id: 12,
    userID: 12,
    timestamp: "2024-05-10T12:30:00Z",
    content: {
      text: "sample post text",
      image: ["https://via.placeholder.com/150"],
      comments: [
        {
          id: 1,
          userID: 5,
          text: "Great post!",
          timestamp: "2024-05-10T12:30:00Z",
        },
      ],
      likedBy: [12],
    },
  },
  {
    id: 13,
    userID: 12,
    timestamp: "2024-05-10T12:30:00Z",
    content: {
      text: "I like trains",
      image: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
      comments: [
        {
          id: 1,
          userID: 5,
          text: "Wow nice",
          timestamp: "2024-05-10T12:30:00Z",
        },
      ],
      likedBy: [13],
    },
  },
];
