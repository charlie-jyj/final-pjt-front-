const reviews = [
  {
    user: {
      id:1,
      nickname: '재명',
    },
    id:1,
    title: '리뷰1',
    content: '리뷰내용1',
    movie: {
      title: '해리포터와 불의잔'
    },
    like_count: 5,
    user_like:[{id:2, nickname:'재명'}],
    created_at: '2021-05-23',
    updated_at: '2021-05-24',
    comments: [
      {
        id:1,
        content: '댓글1',
        user: {
          id:2,
          nickname: '재명',
        },  
      },
      {
        id:2,
        content: '댓글2',
        user: {
          id:2,
          nickname: '재명',
        },  
      },
      {
        id:3,
        content: '댓글3',
        user: {
          id:2,
          nickname: '재명',
        },  
      }
    ]
  },
  {
    user: {
      id:1,
      nickname: '유진',
    },
    id:1,
    title: '리뷰2',
    content: '리뷰내용2',
    movie: {
    },
    like_count: 3,
    user_like:[{id:1, nickname:'유진'}],
    created_at: '2021-05-23',
    updated_at: '2021-05-24',
    comments: [
      {
        id:1,
        content: '댓글1',
        user: {
          id:2,
          nickname: '재명',
        },  
      },
      {
        id:2,
        content: '댓글2',
        user: {
          id:2,
          nickname: '재명',
        },  
      },
      {
        id:3,
        content: '댓글3',
        user: {
          id:2,
          nickname: '재명',
        },  
      }
    ]
  },
  {
    user: {
      id:1,
      nickname: '유진',
    },
    id:3,
    title: '리뷰3',
    content: '리뷰내용3',
    movie: {
      title: '해리포터와 불사조기사단'
    },
    like_count: 2,
    created_at: '2021-05-23',
    updated_at: '2021-05-24',
    comments: [
      {
        id:1,
        content: '댓글1',
        user: {
          id:2,
          nickname: '재명',
        },  
      },
      {
        id:2,
        content: '댓글2',
        user: {
          id:2,
          nickname: '재명',
        },  
      },
      {
        id:3,
        content: '댓글3',
        user: {
          id:2,
          nickname: '재명',
        },  
      }
    ]
  },
  {
    user: {
      id:1,
      nickname: '유진',
    },
    id:1,
    title: '리뷰4',
    content: '리뷰내용4',
    movie: {
   
    },
    like_count: 1,
    created_at: '2021-05-23',
    updated_at: '2021-05-24',
    comments: [
      {
        id:1,
        content: '댓글1',
        user: {
          id:2,
          nickname: '재명',
        },  
      },
      {
        id:2,
        content: '댓글2',
        user: {
          id:2,
          nickname: '재명',
        },  
      },
      {
        id:3,
        content: '댓글3',
        user: {
          id:2,
          nickname: '재명',
        },  
      }
    ]
  },
  {
    user: {
      id:1,
      nickname: '유진',
    },
    id:1,
    title: '리뷰5',
    content: '리뷰내용5',
    movie: {
   
    },
    like_count: 6,
    created_at: '2021-05-23',
    updated_at: '2021-05-24',
    comments: [
      {
        id:1,
        content: '댓글1',
        user: {
          id:2,
          nickname: '재명',
        },  
      },
      {
        id:2,
        content: '댓글2',
        user: {
          id:2,
          nickname: '재명',
        },  
      },
      {
        id:3,
        content: '댓글3',
        user: {
          id:2,
          nickname: '재명',
        },  
      }
    ]
  },
]

export default reviews