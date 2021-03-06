const listHelper = require('../utils/list_helper')

const listWithOneBlog = [
    {
        _id: "5a422bc61b54a676234d17fc",
        title: "Type wars",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
        likes: 2,
        __v: 0
    }
]
const blogs = [
    {
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 7,
        __v: 0
    },
    {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 5,
        __v: 0
    },
    {
        _id: "5a422b3a1b54a676234d17f9",
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
        likes: 12,
        __v: 0
    },
    {
        _id: "5a422b891b54a676234d17fa",
        title: "First class tests",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.html",
        likes: 10,
        __v: 0
    },
    {
        _id: "5a422ba71b54a676234d17fb",
        title: "TDD harms architecture",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
        likes: 0,
        __v: 0
    },
    {
        _id: "5a422bc61b54a676234d17fc",
        title: "Type wars",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
        likes: 2,
        __v: 0
    }  
] 
const favBlog = {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
} 
const authorMostBlogs = {
    author: "Robert C. Martin",
    blogs: 3
}
const authorMostBlogsOfOne = {
    author: "Robert C. Martin",
    blogs: 1
}
const authorMostLikes = {
    author: "Edsger W. Dijkstra",
    likes: 17
}
describe('Total Likes', () => {
    
    test('Of list with only one blog', () => {
        const result = listHelper.totalLikes(listWithOneBlog)
        expect(result).toBe(2)
    })
    test('Of list with many blogs', () => {
        const result = listHelper.totalLikes(blogs)
        expect(result).toBe(36)
    })
      
})
describe('Favorite Blog (most likes)', () => {
    
    test('Of list with only one blog', () => {
        const result = listHelper.favoriteBlog(listWithOneBlog)
        expect(result).toEqual(listWithOneBlog[0])
    })
    test('Of list with many blogs', () => {
        const result = listHelper.favoriteBlog(blogs)
        expect(result).toEqual(favBlog)
    })
      
})
describe('Author with most blogs', () => {
    
    test('Of list with only one blog', () => {
        const result = listHelper.mostBlogs(listWithOneBlog)
        expect(result).toEqual(authorMostBlogsOfOne)
    })
    test('Of list with many blogs', () => {
        const result = listHelper.mostBlogs(blogs)
        expect(result).toEqual(authorMostBlogs)
    })
      
})

describe('Author with most likes', () => {
    
    test('Of list with many blogs', () => {
        const result = listHelper.mostLikes(blogs)
        expect(result).toEqual(authorMostLikes)
    })
      
})

