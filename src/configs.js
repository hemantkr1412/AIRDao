export const contractAddress = "0x9F82251d94bD4c2830aEa915fBc6e3D6f0F6004a";


export const abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admn",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    name: "EmptyOutcomes",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    name: "EmptyTitle",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    name: "EventInactive",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    name: "EventNotExist",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    name: "InvalidAmount",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    name: "InvalidOutcome",
    type: "error"
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "admin",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "AllFundsClaimed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "AmountClaimed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "eventId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "outcomeId",
        type: "uint256"
      }
    ],
    name: "EventClosed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "eventId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "string",
        name: "title",
        type: "string"
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "outcomes",
        type: "string[]"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isActive",
        type: "bool"
      }
    ],
    name: "EventCreated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "eventId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isActive",
        type: "bool"
      }
    ],
    name: "EventUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "eventId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "totalAmountLocked",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "outcomeId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "PredictionSubmitted",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "changeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "checkContractBal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "claimAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "eventId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "outcomeId",
        type: "uint256"
      }
    ],
    name: "closeEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "eventId",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "title",
        type: "string"
      },
      {
        internalType: "string[]",
        name: "outcomes",
        type: "string[]"
      }
    ],
    name: "createEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "events",
    outputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address"
      },
      {
        internalType: "string",
        name: "title",
        type: "string"
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "outcomeId",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "eventId",
        type: "uint256"
      }
    ],
    name: "getOutcomeInfo",
    outputs: [
      {
        internalType: "string[]",
        name: "titles",
        type: "string[]"
      },
      {
        internalType: "uint256[]",
        name: "voteCounts",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "eventId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "outcomeId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "getUserPrediction",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "eventId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "outcomeId",
        type: "uint256"
      }
    ],
    name: "submitPrediction",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "totalAmountLocked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "eventId",
        type: "uint256"
      }
    ],
    name: "updateEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountToSend",
        type: "uint256"
      },
      {
        internalType: "address payable",
        name: "receiverAddr",
        type: "address"
      }
    ],
    name: "withdrawAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];