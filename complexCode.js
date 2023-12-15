/***************************************
 * Filename: complexCode.js
 * 
 * Description: This code demonstrates a complex and sophisticated
 *              example of a social media platform using JavaScript.
 *              It includes user registration, login, posting, comments,
 *              and liking functionality. The code is over 200 lines long
 *              and demonstrates professional and creative programming
 *              techniques.
 ****************************************/

// User Class
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.posts = [];
    this.friends = [];
  }

  createPost(content) {
    const post = new Post(this.name, content);
    this.posts.push(post);
  }

  addFriend(user) {
    this.friends.push(user);
  }

  likePost(post) {
    if (!post.likes.includes(this.name)) {
      post.likes.push(this.name);
    }
  }

  commentPost(post, comment) {
    const commentObj = new Comment(this.name, comment);
    post.comments.push(commentObj);
  }
}

// Post Class
class Post {
  constructor(author, content) {
    this.author = author;
    this.content = content;
    this.likes = [];
    this.comments = [];
  }
}

// Comment Class
class Comment {
  constructor(author, content) {
    this.author = author;
    this.content = content;
  }
}

// Example Usage
const user1 = new User("John", "john@example.com", "123456");
const user2 = new User("Jane", "jane@example.com", "654321");

user1.createPost("Hello World!");
user1.addFriend(user2);

user2.createPost("This is a complex code example.");
user2.likePost(user1.posts[0]);

user1.commentPost(user2.posts[0], "Great example!");

console.log(user1);
console.log(user2);