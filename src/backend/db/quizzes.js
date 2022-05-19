import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const quizzes = [
  {
    _id: uuid(),
    title: "Mathematics",
    img: "https://miro.medium.com/max/1400/1*L76A5gL6176UbMgn7q4Ybg.jpeg",
    totalScore: 50,
    mcqs: [
      {
        _id: uuid(),
        question: "Which triangle has two equal sides?",
        options: [{_id: uuid(), option: "Scalene triangle", isCorrect: false},
        {_id: uuid(), option: "Right angle triangle", isCorrect: false},
        {_id: uuid(), option: "Isosceles triangle", isCorrect: true},
        {_id: uuid(), option: "None of the above", isCorrect: false}],
      },
      {
        _id: uuid(),
        question: "All angles of a triangle are equal in",
        options: [{_id: uuid(), option: "Scalene triangle", isCorrect: false},
        {_id: uuid(), option: "Equilateral triangle", isCorrect: true},
        {_id: uuid(), option: "Isosceles triangle", isCorrect: false},
        {_id: uuid(), option: "Right angle triangle", isCorrect: false}],
      },
      {
        _id: uuid(),
        question: "The perimeter of a traingle with sides 3cm, 4cm, 5cm respectively:",
        options: [{_id: uuid(), option: "12cm", isCorrect: true},
        {_id: uuid(), option: "10cm", isCorrect: false},
        {_id: uuid(), option: "24cm", isCorrect: false},
        {_id: uuid(), option: "15cm", isCorrect: false}],
      },
      {
        _id: uuid(),
        question: "If perimeter of isosceles traingle is 10cm & two equal sides are 3cm each.Length of third side is:",
        options: [{_id: uuid(), option: "2cm", isCorrect: false},
        {_id: uuid(), option: "8cm", isCorrect: false},
        {_id: uuid(), option: "6cm", isCorrect: false},
        {_id: uuid(), option: "4cm", isCorrect: true}],
      },
      {
        _id: uuid(),
        question: "Which one of below is famous formula to calculate the area of traingle?",
        options: [{_id: uuid(), option: "Cauchy's formula", isCorrect: false},
        {_id: uuid(), option: "Hero's formula", isCorrect: false},
        {_id: uuid(), option: "Heron's formula", isCorrect: true},
        {_id: uuid(), option: "Einstein's formula", isCorrect: false}],
      },
    ],
    catergoryName: "Mathematics",
  },
  {
    _id: uuid(),
    title: "Physics",
    img: "https://images.theconversation.com/files/191827/original/file-20171025-25516-g7rtyl.jpg?ixlib=rb-1.1.0&rect=0%2C70%2C7875%2C5667&q=45&auto=format&w=926&fit=clip",
    totalScore: 50,
    mcqs: [
      {
        _id: uuid(),
        question: "Who invented the laws of motion?",
        options: [{_id: uuid(), option: "Einstein", isCorrect: false},
        {_id: uuid(), option: "Faraday", isCorrect: false},
        {_id: uuid(), option: "Newton", isCorrect: true},
        {_id: uuid(), option: "Tesla", isCorrect: false}],
      },
      {
        _id: uuid(),
        question: "What is the S.I unit of current?",
        options: [{_id: uuid(), option: "Volt(V)", isCorrect: false},
        {_id: uuid(), option: "Ampere(A)", isCorrect: true},
        {_id: uuid(), option: "Henry(H)", isCorrect: false},
        {_id: uuid(), option: "None of the above", isCorrect: false}],
      },
      {
        _id: uuid(),
        question: "Rate of change of flux in a coil is:",
        options: [{_id: uuid(), option: "emf induced", isCorrect: true},
        {_id: uuid(), option: "current induced", isCorrect: false},
        {_id: uuid(), option: "resistance induced", isCorrect: false},
        {_id: uuid(), option: "capacitance induced", isCorrect: false}],
      },
      {
        _id: uuid(),
        question: "Thevenin's theorem is used to calculate equivalent:",
        options: [{_id: uuid(), option: "force", isCorrect: false},
        {_id: uuid(), option: "energy", isCorrect: false},
        {_id: uuid(), option: "voltage and resistance", isCorrect: true},
        {_id: uuid(), option: "capacitance", isCorrect: false}],
      },
      {
        _id: uuid(),
        question: "Rate of change of momentum is:",
        options: [{_id: uuid(), option: "capacitance", isCorrect: false},
        {_id: uuid(), option: "energy", isCorrect: false},
        {_id: uuid(), option: "voltage", isCorrect: false},
        {_id: uuid(), option: "force", isCorrect: true}],
      },
    ],
    catergoryName: "Physics",
  }
];
