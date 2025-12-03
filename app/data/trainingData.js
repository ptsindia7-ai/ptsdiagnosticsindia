export const trainingData = {
  ican3: {
    type: "video",
    title: "iCan-3",
    videoType: "file", //
    videoUrl: "/videos/ican3.mp4",
    // videoId: "zpOULjyy-n8", // extract only ID from YouTube embed
    rating: 4.5,
    reviews: 251,
    description:
      "We are a global leader in innovative point-of-care diagnostic devices...",
    steps: [
      { title: "Setting up App", time: "00:15", start: 15 },
      { title: "Pairing", time: "00:46", start: 46 },
      { title: "Cleaning", time: "01:12", start: 72 },
      { title: "Applying Sensor", time: "01:37", start: 97 },
      { title: "Inserting Sensor", time: "02:24", start: 144 },
      { title: "Start & Warm Up", time: "02:47", start: 167 },
      { title: "End Session", time: "03:17", start: 197 },
    ],
  },

  ican6: {
    type: "pdf", // <– PDF card
    title: "iCan-I6",
    pdf: "/pdfs/ureader.pdf", // <– PDF link
    profile: "/people/xyz.png",
  },

  a1cnow: {
    type: "video",
    title: "A1CNOW+",
    videoType: "file", //
    videoUrl: "/videos/ a1cnow.mp4",
    // videoId: "zpOULjyy-n8", // extract only ID from YouTube embed
    rating: 4.5,
    reviews: 251,
    description:
      "We are a global leader in innovative point-of-care diagnostic devices...",
    steps: [
      { title: "Demonstration", time: "00:00", start: 0 },
      { title: "Blood Collector", time: "00:15", start: 15 },
      { title: "Running the test", time: "02:00", start: 120 },
      { title: "End", time: "03:32", start: 213 },
    ],
  },
};
