import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Mathematics",
    description: "Quiz based on mathematics",
    img: "https://miro.medium.com/max/1400/1*L76A5gL6176UbMgn7q4Ybg.jpeg"
  },
  {
    _id: uuid(),
    categoryName: "Physics",
    description: "Quiz based on physics",
    img: "https://images.theconversation.com/files/191827/original/file-20171025-25516-g7rtyl.jpg?ixlib=rb-1.1.0&rect=0%2C70%2C7875%2C5667&q=45&auto=format&w=926&fit=clip"
  },
];
