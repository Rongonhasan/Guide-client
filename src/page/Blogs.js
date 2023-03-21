import React from 'react';
import useTitle from '../hook/useTitle';
const Blogs = () => {
  useTitle("Blogs")
    return (
        <div>
        <h1 className="text-2xl mb-4 "> Question Section</h1>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Difference between SQL and NoSQL
          </div>
          <div className="collapse-content">
            <p>
              From analysts and engineers to IT decision makers, many are familiar
              with Relational Database Management Systems (RDBMS) and the
              Structured Query Language (SQL) used to interact with them. While
              these terms refer to a decades-old paradigm which remains a wide
              standard, today the sheer variety and depth of database systems can
              be dizzying. What’s more, rising volumes of unstructured data,
              availability of storage and processing power, and evolving analytic
              requirements have generated interest in fundamentally different
              technologies. Collectively known as NoSQL, these popular
              alternatives to traditional RDBMSs show promise for a variety of
              modern use cases. To make informed decisions about which to use,
              practitioners should be aware of the differences between SQL, NoSQL,
              individual Database Management Systems (DBMS) and languages, as well
              as the situations each is best-suited for, and how the landscape is
              changing.
            </p>
          </div>
        </div>
  
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is JWT, and how does it work?
          </div>
          <div className="collapse-content">
            <p>
              JSON Web Token (JWT) is an open standard (RFC 7519) for securely
              transmitting information between parties as JSON object. It is
              compact, readable and digitally signed using a private key/ or a
              public key pair by the Identity Provider(IdP). So the integrity and
              authenticity of the token can be verified by other parties involved.
              The purpose of using JWT is not to hide data but to ensure the
              authenticity of the data. JWT is signed and encoded, not encrypted.
              JWT is a token based stateless authentication mechanism. Since it is
              a client-side based stateless session, server doesn't have to
              completely rely on a datastore(database) to save session
              information.
            </p>
          </div>
        </div>
  
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is the difference between javascript and NodeJS?
          </div>
          <div className="collapse-content">
            <p>
               Javascript is a programming language that is used for writing
              scripts on the website. <br /> And NodeJS is a Javascript runtime
              environment. 
            </p>
          </div>
        </div>
  
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            How does NodeJS handle multiple requests at the same time?
          </div>
          <div className="collapse-content">
            <p>
              I understand that Node.js uses a single-thread and an event loop to
              process requests only processing one at a time which is
              non-blocking. But still, how does that work, lets say 10,000
              concurrent requests. The event loop will process all the requests?
              Would not that take too long? I can not understand yet how it can
              be faster than a multi-threaded web server. I understand that
              multi-threaded web server will be more expensive in resources
              memory, CPU, but would not it still be faster? I am probably
              wrong; please explain how this single-thread is faster in lots of
              requests, and what it typically does in high level when servicing
              lots of requests like 10,000. And also, will that single-thread
              scale well with that large amount? Please bear in mind that I am
              just starting to learn Node.js.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blogs;