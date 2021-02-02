# FeedbackWebApp

# **Overview**

![image-20210110200221244](README/image-20210110200221244.png) ![img](https://lh4.googleusercontent.com/7uZ5fmGdg2l6MhUAwWuTrjiP0zPujc5z1gLXUiTBsoKQV_IU33juDf9rcDv9PTWe-70_6g6DdGW-s2jjGkpkST5PhQCUuOgHqqehYV6BT5nIFFR4AN1EJiKlfTzxHEvWhe_OA9Pu)  

  

# **Express + Server Side Architecture**

## Initialize package and install express

- **Node.js** is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. 
- **npm**: is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. 
- **npx**: is a tool for executing Node package. it is intended to help round out the experience of using packages from the npm registry — the same way npm makes it super easy to install and manage dependencies hosted on the registry, npx makes it easy to use CLI tools and other executables hosted on the registry.
- **webpack**:  is an open-source **JavaScript module bundler**. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. webpack takes modules with dependencies and generates static assets representing those modules. 
- **module bundler**:  is a tool that takes pieces of JavaScript and their dependencies and bundles them into a single file, usually for use in the browser. 

````bash
mkdir server
npm init
# create package.json
npm install --save express
# create package-lock.json and /node_modules 
cat package.json
# cat command allows us to create single or multiple files, view contain of file, concatenate files and redirect output in terminal or files
````



<img src="https://lh5.googleusercontent.com/08CXmHxquKM_2Q-KzkJS-FCUn9iHh4AXW_vfDhbe3jAkt2_OWk-4nxvbtlzLelWbi5_5ldAIQE_sbUNoFuK_s158N-qeIIv511_7RP-3sRshpQOx5SR-mEhqkpnoToQwC7kPXJFD" alt="img" style="zoom:80%;" /> ![image-20210110200408649](README/image-20210110200408649.png) 

## create index.js

![img](https://lh5.googleusercontent.com/tvofWPqqOd7Nj95H9iXtlVM2wAjzfeWY9-gmX4Gq2NOlPfOh9vo6zGDS2UmvhWcKuygf18uxQY1SED7Jqiw4ZkQoX80Bb_Whx6qzy8M8hR-XwPkUWgGQaxte6FqoAB0AsN77z90P) 

## Set off server:

````bash
node index.js
````

Response from localhost:5000

![img](https://lh5.googleusercontent.com/EBcvcfVBFQCBU10royYai9qjhmFDN1yKqJQ4FQZhfqY6T3UTO1yZmaU4vkNr-deTAvA09eOLW7N3AR1cmjXFTAMyAzad1e-lHukQ8t3RifkxIdIAAXz38a7gzzE5MkhBQPiZSb9X) 

<img src="https://lh4.googleusercontent.com/k-SDD6iL8c1GCBmmkjELBD2PcPTkm7TjJyjdArZnnev7LAoP6tgWya8SojvubzExA30e7WwBSnc4JvYom8VDnEreFIDEjlHvH7wcICgE25VbRoWNN09yjGZBALETZoYAhGl51Jp9" alt="img" style="zoom: 80%;" /> <img src="https://lh5.googleusercontent.com/SjuWQbz7hg53g3X2x-Y0WEsXkT306OQCyP15zZVh2v74vyiay5CigwC7nnuKN0ZFWssJJe6NDyzpFnfLAbkLwZxjO9S3z0tZnD-GhYeV1unpydMsbqcQ89BvTx4J5x2LFJkr-88W" alt="img" style="zoom: 80%;" /> 



# **Heroku Deployment**

<img src="README/image-20210110200435540.png" alt="image-20210110200435540" style="zoom:80%;" /> 

index.js

````javascript
const express = require('express');
// CommonJS module syntax

// another syntax: if you have ES 2015 modules
// import express from 'express';


const app = express();

app.get('/', (req, res) => {
    res.send({bye : 'buddy'});
});

const PORT = process.env.PORT || 5000;
// dynamic port, or default using 5000

app.listen(PORT);
// port 

// route: localhost:5000
````

<img src="https://lh5.googleusercontent.com/hiwMNYiIBZIpjCedyl4fSKAS-T5nDIitIQ7bnWUqlEsD0dzIvjDTD6lShyoEEIkmT2GflKcELObRiBvzO7r1cou0nIJC2QwMhtpra9BS4feZubLE66fej7ieBLPRvcn479vppQ0B" alt="img" style="zoom:80%;" /> 

![image-20210126003413777](README/image-20210126003413777.png) 

![img](https://lh6.googleusercontent.com/HtgEAiO3nRf9BlG4GmfYoCE7ucl8XqgRUZjfBFsRURs4vDyij1jKGI_ntFFA_rrncBTCcuYosOilez-vRj6ueBTRwshueLpoGnQ7hmHcEqP2rS6WWbkjV9WXzPuoKwKsGRVlJCQw) 

![image-20210126014142291](README/image-20210126014142291.png) 

<img src="https://lh5.googleusercontent.com/swZnD6F11_1sDYcdidv6vXkmador8N0qZgMC3N29MYB721kD7lqk0JNTqqWemVCJOGPKbelgxQlY-tB3VIyK9HvTCKtQNU04zb02ecP7Z3MB--S2AQfbBXsY-3o_YlcPpBy1DRsr" alt="img" style="zoom:80%;" /> 

# **PassportJS + Google OAuth**

![img](https://lh3.googleusercontent.com/0mTLKfER1vFMWKvoPSvIn7DoRexvKv_GQKwLam96L5osFlr1DtLPxY20NGguRvG5Rmt7JDFoS27dRcp07YxtOXd-wEtJeR6GJ3NE0E-PlB2rf1ParS8q_UXP6bZKGchGvAq-VtNG) 

![img](https://lh4.googleusercontent.com/ewIlM_E1fT8kpq2TWY7zuodxQyk3CBUU5F59YQusVu3wWN5drnUkYTyMztJ-9-BDKwcc6YZX6Nx8M_IqlCcViH2WNDb-Pqv7o1ZFjMoLGv0_RmBKzJequScqPMrhd9jYWmh8dyKQ) 

<img src="https://lh6.googleusercontent.com/iXpoUsOkcbb7J-LGgIRhyS7NIZazChbTcqHQ5OrbjLi-HeILdk776ToIUrigkg22aAMqbsZAuQXfOoeb7zvrFtdYwtkbDcdr29GMg1s0BOfcRar7Ec9zbYyn1_8V3LM_emJWePgM" alt="img" style="zoom:80%;" /> 

Google Project Setup and OAuth Register:https://console.cloud.google.com/cloud-resource-manager?pli=1

Google OAuth client created:

Client ID & Client Secret

## Securing API Keys (the client secret)

![img](https://lh6.googleusercontent.com/Lc4wMof-PBAiPSmV5vj8j0ng4Pr1UNpFRcby8Cz3HuZSt4P3TL97vvV5XM0OQFHNXzULxTMpdMX081XW9Kzz7Z3Z0nb_IO7ulsLZJ-UAPn4_tR-l7XeNK4v9H6yHWwh5VtmMk06Z) 

Install passport and passport-google-oauth20

<img src="README/image-20210110200615293.png" alt="image-20210110200615293" style="zoom:50%;" /> 

Create config folder and keys.js under the folder

Within keys.js, store your google client ID and secret. Make sure the file is added to .gitignore

![image-20210126003458233](README/image-20210126003458233.png) 

 ![img](https://lh3.googleusercontent.com/w30RRA8lNp3U6Bx1s05nX4qr6O4VKIH9yLLYHogNCRtdPw7cfStOvonwfeyUQULyyyCOan13gGX0l7niTRaiSWg3M4YwhGPUt9to2-17VN_upgbeqvkzt-QFeE42IOSB43B8ktkb) 

## Authorize redirect URI and apply OAuth callback

![img](https://lh4.googleusercontent.com/YELW2TK7yMUNxe8ZkcyCan9unGGfAoGslkDJbTCprmWz9RbmvDk7SuJ2UGxKydY7Mm4yYWO5RqVlRfa5rS_TQ13xaqd21zfAyh9T9-NoahES6hlj-fhrbwsH6czw7ao65momFv1-) 

# **Nodemon Setup**

With nodemon, there is no need to restart (node index.js) the app every time when changes are made. Instead of “node index.js”, we can set off “npm run dev” and if any change is added, server will be restarted automatically.

<img src="README/image-20210110200710086.png" alt="image-20210110200710086" style="zoom:50%;" /> 

![image-20210112231512297](README/image-20210112231512297.png)  ![img](https://lh4.googleusercontent.com/DFRSRlJclJ3Xz1xmKfsx7phhGQ9TV4qRBW4sPomGCgTF2l2NVFOCJ3903zHg4IFHgOcCQ33gOeRjql0gaG7ecn8VOw3vxZ23vy1soWuytSnbnRnk0-BsH8s07gnHvsNUuAaWthvK) 

# **Server Structure Refactor**

![image-20210110200734688](README/image-20210110200734688.png) 

![img](https://lh4.googleusercontent.com/miSv31Veo3fjMParR4SkA_hl6sF2RY7JkpyLjFygFzK2R615l4T0b4MeIdMjUUN7bgaGf-XWve1b4zgi2JNaBc641p25mk5W7T8PHqBoCiKSMQXgWJYk6MCgO3QOplL_LkQ0GIZX)  ![img](https://lh4.googleusercontent.com/jddxvznvqC1zgslioJNTwICfGx_kShJd1N7RXSOrzF3rJbiejJuOGaCAatE0YlqWZTEjCB3msRyMKyTczr5kJCgT-vcEy4w-Mu8pJV3bBcNOvEPRpkilg4b-QaX3epGadl-j-OwP) 

![img](https://lh5.googleusercontent.com/wADyuo95OojsdzurgzIykUSCkNkL869im5YH6nJo7luJX9Bp-YALXJO6sljq3nyMjyoDtMm1HrRuDJ0BXjM_zrUTPckZWtPZBFD9fGZn6fDNibteiH61io0-a3p7VtafMHXvVQ8Q) 

# **Authentication Theory and Signing in User with OAuth**

<img src="https://lh3.googleusercontent.com/Ryospzp_V_yCty8b1CjldoGKHNVIZdoA_319_h1ktXvE9RuYjYHWAMBSuDeDNArWPkIftFugLxSpW8dYHlpNCsl3hBy3w_-Fr-G3spv0xxN9AfFXqik-y3Am9GC3aT7kVkILNqkI" alt="img" style="zoom:80%;" /> 

<img src="https://lh5.googleusercontent.com/rpT3X_VXmTSczQruGc8WdEDeQBVdX9eKEwMUiSBXtgkQTrUWz5bD4iOOp4USbL3oBbwJUUU6O8CFYUSu52gX6RP0bLJWXt2neomKcFIXYGw3waUJ-J_JaHOxegnjwvRcHt4xxNmt" alt="img" style="zoom:80%;" /> 

![img](https://lh5.googleusercontent.com/xh-h79mCJmpD450sr8fsmYtosWceL0eNFnnf61CDB3-fx8BJen6isBVe5jMiOxjo5mgfOyK7pCu_WYw6RsDIP9EkmN3uKriblcrHN0x7z2PBBOpdKThOp1Pb2nhNznhUtiqZ5mt3) 

## OAuth

OAuth: cookie/**token**? based authentication 验证 (Authorization 授权)

**OAuth** is an [open standard](https://en.wikipedia.org/wiki/Open_standard) for access [delegation](https://en.wikipedia.org/wiki/Delegation_(computer_security)), commonly used as a way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords.

![img](https://lh6.googleusercontent.com/6HkMxDlaMURHZclf_Bza3zDft1xyvl98xRN7TL5RTG7fqsWdJA9J8ieYiuFh7z1QN5MaJzF_tcKNL9uFpiPT430J6j3EStxTRBvr2L9oUMRvzRhajzuVMuaJ5aq-lFI4qZ3Cwx2N) 

 

## OAuth 2.0 v.s. OpenID v.s. JWT 

- **OpenID**  is an [open standard](https://en.wikipedia.org/wiki/Open_standard) and [decentralized](https://en.wikipedia.org/wiki/Decentralized) [**authentication**](https://en.wikipedia.org/wiki/Authentication) [protocol](https://en.wikipedia.org/wiki/Communications_protocol). Promoted by the non-profit [OpenID Foundation](https://en.wikipedia.org/wiki/OpenID#OpenID_Foundation), it allows users to be authenticated by co-operating sites (known as [relying parties](https://en.wikipedia.org/wiki/Relying_party), or RP) using a third-party service, eliminating the need for [webmasters](https://en.wikipedia.org/wiki/Webmaster) to provide their own ad hoc login systems, and allowing users to log into multiple unrelated websites without having to have a separate identity and password for each.

- **OAuth 2.0** is the industry-standard protocol for **authorization**.
  OpenID Connect 1.0 is a simple identity layer on top of the OAuth 2.0 protocol. It allows Clients to verify the identity of the End-User based on the authentication performed by an Authorization Server, as well as to obtain basic profile information about the End-User in an interoperable and REST-like manner.

  <img src="README/image-20210110200807907.png" alt="image-20210110200807907" style="zoom:80%;" /> 

  ![image-20210110200827527](README/image-20210110200827527.png) 

- **JSON Web Token (JWT)** is an open standard ([RFC 7519](https://tools.ietf.org/html/rfc7519)) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the **HMAC** algorithm) or a public/private key pair using **RSA** or **ECDSA**.

  JWT can be used for **authorization** and **information exchange**.

  <img src="README/image-20210110200847137.png" alt="image-20210110200847137" style="zoom: 67%;" /> 

  <img src="README/image-20210110200902544.png" alt="image-20210110200902544" style="zoom: 50%;" />  

## Cookie- based authentication v.s. Token-based authentication

![img](https://lh5.googleusercontent.com/jiYB9biaXRfrJZtiLLkIO6G2OLCMqUmlPx7pjIfGjm0IyextrKW1ZVxYMe3k-wudz5IuM538e7T8yzTAly-iyGIxDybgBRtxqDd_xpqFUqTDbJT2V7ALlztyTyVBk6V0I7EQlZH1) 

- **Cookie-based authentication** is **stateful**. This means that an authentication record or **session** must be kept both server and client-side. The server needs to keep track of active sessions in a database, while on the front-end a cookie is created that holds a session identifier, thus the name cookie based authentication.

  (Client) Username/ Password -> (Server) verify credentials in DB and create a session

  (Server) cookie (with session id) -> (Client) save cookie locally and carry it for subsequence request

- **Token-based authentication** is **stateless**. The server does not keep a record of which users are logged in or which JWTs have been issued. Instead, every request to the server is accompanied by a token which the server uses to verify the authenticity of the request. The token is generally sent as an addition Authorization header in the form of Bearer {JWT}, but can additionally be sent in the body of a POST request or even as a query parameter. 

- **Cookie:**

  An **HTTP cookie** (also called **web cookie**, **Internet cookie**, **browser cookie**, or simply **cookie**) is a small piece of [data](https://en.wikipedia.org/wiki/Data_(computing)) stored on the [user](https://en.wikipedia.org/wiki/User_(computing))'s computer by the [web browser](https://en.wikipedia.org/wiki/Web_browser) while [browsing](https://en.wikipedia.org/wiki/Browsing) a [website](https://en.wikipedia.org/wiki/Website). Cookies were designed to be a reliable mechanism for websites to remember [**stateful**](https://en.wikipedia.org/wiki/Program_state) information (such as items added in the shopping cart in an [online store](https://en.wikipedia.org/wiki/Online_shopping)) or to record the user's browsing activity (including clicking particular buttons, [logging in](https://en.wikipedia.org/wiki/Access_control), or recording which [pages were visited in the past](https://en.wikipedia.org/wiki/Web_browsing_history)). They can also be used to remember pieces of information that the user previously entered into [form fields](https://en.wikipedia.org/wiki/Form_(HTML)), such as names, addresses, [passwords](https://en.wikipedia.org/wiki/Password), and [payment card numbers](https://en.wikipedia.org/wiki/Payment_card_number).

  Cookies are sent as HTTP headers.

- **Token:**

  A **security token** is a [peripheral device](https://en.wikipedia.org/wiki/Peripheral_device) used to gain access to an electronically restricted resource. The token is used in addition to or in place of a [password](https://en.wikipedia.org/wiki/Password). It acts like an electronic key to access something.

  Most of the time, tokens are sent using HTTP headers. Not all tokens have session info, but it can, like JWT token has extra data for session

- **HTTP Headers:**

  *HTTP header fields** are components of the header section of [request](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_message) and [response](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Response_message) messages in the [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) (HTTP). They define the operating parameters of an HTTP 

- **Session**:

  In [computer science](https://en.wikipedia.org/wiki/Computer_science) and [networking](https://en.wikipedia.org/wiki/Computer_network) in particular, a session is a temporary and interactive information interchange between two or more communicating devices, or between a computer and user (see [login session](https://en.wikipedia.org/wiki/Login_session)). A session is established at a certain point in time, and then ‘torn down’ - brought to an end - at some later point. An established communication session may involve more than one message in each direction. A session is typically [stateful](https://en.wikipedia.org/wiki/Stateful), meaning that at least one of the communicating parties needs to hold current state information and save information about the session history in order to be able to communicate, as opposed to [stateless](https://en.wikipedia.org/wiki/Stateless_server) communication, where the communication consists of independent requests with responses.

- **HTTP Session:**

  An HTTP session is a sequence of network request–response transactions. An HTTP client initiates a request by establishing a [Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) (TCP) connection to a particular [port](https://en.wikipedia.org/wiki/TCP_and_UDP_port) on a server (typically port 80, occasionally port 8080; see [List of TCP and UDP port numbers](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers)). An HTTP server listening on that port waits for a client's request message. Upon receiving the request, the server sends back a status line, such as "HTTP/1.1 200 OK", and a message of its own. The body of this message is typically the requested resource, although an error message or other information may also be returned.

- **URI and URL**

  URI (Uniform Resource **Identifier**) is an **identifier** of a specific resource. 

  URL (Uniform Resource **Locator**) is a special type of identifier that also tells you how to access it, such as HTTPs, frp, etc. 

  If the protocol (https, http, ftp, etc.) is either present or implied for a domain, you should call it a URL.

  <img src="README/image-20210110201302820.png" alt="image-20210110201302820" style="zoom:50%;" /> 

  <img src="README/image-20210110201328700.png" alt="image-20210110201328700" style="zoom:80%;" />  
  
  ![img](https://lh3.googleusercontent.com/nuTfHlJ8YL3SYhIjslpsEJqcIqZIIZAqeGMDe4NP3jhMKZQqHJpCt_4Z-0bZRFUkt_cQvcoUal-YdBnzjIoboWSX_jPqK9ThXmniZZgdvTyYtCR8Am7Ozw94SuscLd15KduZsn_J) 

# **Mongoose + Mongo DB**

<img src="https://lh6.googleusercontent.com/ZzK_vp0Hq-eG9UuDQkok0-hHlWqj4TY0CZVH90uAoLzP9I_7OBTyvKz2tTFoepVAv7ZdboTdcktMiE5UieBHTLhq072-U0vdoTCeFC9Q1GMdD46__DKOj1-705xY76isVtS_boC7" alt="img" style="zoom:80%;" />      ![img](https://lh3.googleusercontent.com/kiOspAzQaGY-eT09AKGuaH7DTtMHqWkpAL8VWy_ZJmTZBAnSlRf8VDWc1w5hM7PhlyrYF4n39AhD6BXGizekNZf9dC_JKcXDyD4q1TiZf7L88sbLJaMRcGreEFC4cwl6jx9sFwrg) 

![img](https://lh3.googleusercontent.com/tSNftQdQ0LqIsjpDnXmrTKp5B5e-vU8UAcKGwJ59OVWklvzwhtoYb9RM3VcpFfJaClptQcrtKoVuBbZOcuapDBnf15l8dshZdr67zCG_ZQdQAGq7On-FWendZiTgED94ebJfjLzN) 

## Setup and Config MongoDB Atlas Cluster

MongoDB Atlas is the global cloud database service for modern applications.
Deploy fully managed MongoDB across AWS, Google Cloud, and Azure with best-in-class automation and proven practices that guarantee availability, scalability, and compliance with the most demanding data security and privacy standards.

https://www.mongodb.com/cloud/atlas

Create cluster , DB user

## Install Mongoose

![img](https://lh6.googleusercontent.com/nVb5KGG67Yqpi8kMfTEz4y2SqZ6z4o41oxxM-XoxgJncrEORF3BZRZJMVVuraZxInXIigeVI5BU67ujNkea80YoGfkM0-UjYqQ48C2DZwud-5IvL8KsR3uWGEgei0tGsUw2AR140) 

## Using Mongoose to connect Mongo

**<img src="https://lh3.googleusercontent.com/UIJPTz8rW_llUm6tFX5C6qvmYiyiSmr7FcHZK-qaoWeTil2j7fKw4QTwN0XrHGdWrZ8aR8nb2QDXWbgfAKbonLyTEeLlWHLubGfGU17TWGLfURXbghvSwGu78VpY9I0lLbGNh_wA" alt="img" style="zoom:80%;" />** 

keys.js

![image-20210126003226808](README/image-20210126003226808.png) 

**![img](https://lh6.googleusercontent.com/WDRWISTO3Qpc01rTefFNWkedA_AAMEZ_9qsVdIK5CWhXsbOgMJKDVaEUj5DNFQFrGa3JIbxRkt6-P9rbWSgnTq8Yq6IwF8-k1gGs4hPWppQ0aiGq_fCKZg7a6khXU8saplKvUKJA)** 

## Create Mongoose Model Class

**![img](https://lh3.googleusercontent.com/uKjFU9cnNEbwxINCz8p9B9-W50koF1Khwiq75n3QtoHBnWveq-spZmdnuz3YhYBcuy-yp5MSa6AzFNadjXFGY34nBTtiNJT4quQV8L-XE9393Rzb3t5EdBzrVfejUR1OV9PPl4NC)** 

## Create /models/User.js for Mongoose Model Class

**![img](https://lh6.googleusercontent.com/slzmZ8W7_0ccmhf9CKWckkr9dghVIO15430cxsx5Yi9h-u3OeG5A5GlS0kK483QvmuvBd9R9t38L-Mft-E4loKHM9d-X0NorktKkFr4V2o0ooidxJ6-6RerFroYzkj4w8aUoYpdR)** 

## Import Mongoose Model Class in index.js

**![img](https://lh6.googleusercontent.com/GJ5esschrkA0-X_qpP6t2ZQGC2pM0nwbdWcecbiPbfUlfu2bii6OTkkEsuX49AEWliGgJJXgqHBEgITcusnWY7amJw6WP3DoTu6kVN8ggEum69ScVmviMlt-9HF58bRFpAYERJC2)** 

## Apply Mongoose Model Class to passport.js, to save googleId to Mongo DB when authentication

**Note**: instead of import the User.js file, we are applying mongoose model in a different way as below

**![img](https://lh4.googleusercontent.com/8CZ25HI1QZ2MRMAriJv_HyQu7vkXUVboaFZRUSJK8nLsLUuqF1VFaLkEucDsA5qmutQY7-mXXOZfPQuhvw5lk_LCXxajs8tKEUA-qXsU-2z1mPQEmas70CPBHgPQPPxAcKOaXlLs)** 

## Import /models/User in index.js

![image-20210110201424470](README/image-20210110201424470.png)  

## If there is existing googleID, don't create a record in Mongo DB

![image-20210110201442405](README/image-20210110201442405.png)  

passport.js

````javascript
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, 
        (accessToken, refreshToken, profile, done) => {
            // console.log('access token: ', accessToken);
            // console.log('refresh token: ', refreshToken);
            // console.log('profile: ', profile)
            User.findOne({ googleId: profile.id})
                .then((existingUser) => {
                    if (existingUser){
                        // we already have a record with the given profile ID
                    } else {
                        // we don't have a record with this ID, make a new record
                        new User({googleId: profile.id}).save();
                    }
                })
        }
    )
);
````

![image-20210110201516113](README/image-20210110201516113.png) 

passport.js

````javascript
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, 
        (accessToken, refreshToken, profile, done) => {
            // console.log('access token: ', accessToken);
            // console.log('refresh token: ', refreshToken);
            // console.log('profile: ', profile)
            User.findOne({ googleId: profile.id})
                .then((existingUser) => {
                    if (existingUser){
                        // we already have a record with the given profile ID
                        done(null, existingUser);
                    } else {
                        // we don't have a record with this ID, make a new record
                        new User({googleId: profile.id})
                            .save()
                            .then(user => done(null, user));
                    }
                })
        }
    )
);
````



## Encoding User and Deserialize User

serialize and deserialize will be called automatically by passport with User model

serialize and deserialize Mongo DB ID, rather than profile id

<img src="README/image-20210126213847336.png" alt="image-20210126213847336" style="zoom:80%;" /> 

![image-20210110201552080](README/image-20210110201552080.png)  

 ![image-20210110201603036](README/image-20210110201603036.png)  

![image-20210110201617977](README/image-20210110201617977.png) 

# cookie-session + Enable Cookie

## Use cookie-session

````bash
npm install --save cookie-seesion
````

![image-20210110201646432](README/image-20210110201646432.png)  

## app.use()

app.use()  is the middleware and applied to all router handlers

<img src="README/image-20210110201703203.png" alt="image-20210110201703203" style="zoom:80%;" />  

## Test session

if response just send the request session, you will find the session context, where the user id is the same as user id in your mongo DB

![image-20210110201722592](README/image-20210110201722592.png) 

![image-20210126214011948](README/image-20210126214011948.png) 

![image-20210126214041165](README/image-20210126214041165.png) 

## Cookie-session v.s. Express-session

<img src="README/image-20210110201810035.png" alt="image-20210110201810035" style="zoom:80%;" />  <img src="README/image-20210110201820431.png" alt="image-20210110201820431" style="zoom:80%;" /> 



# Workflow of every request

![image-20210110201837417](README/image-20210110201837417.png)  

# Testing authentication by adding a route handler to deal with response

After login, you should now get the current user 

![image-20210110201855769](README/image-20210110201855769.png)  

Login： http://localhost:5000/auth/google/

![image-20210110201908217](README/image-20210110201908217.png)  

Current User： http://localhost:5000/api/current_user

![image-20210126214135922](README/image-20210126214135922.png)  ![image-20210126214202677](README/image-20210126214202677.png) 

# Log out Users

Passport attached a couple of functions to request object so that we can manipulate user's authentication status

add a logout router

![image-20210110201946162](README/image-20210110201946162.png)  

Logout： http://localhost:5000/api/logout

![image-20210110201956552](README/image-20210110201956552.png) 

<img src="README/image-20210110202006890.png" alt="image-20210110202006890" style="zoom:67%;" />  



# Dev vs Prod Environments (Heroku)

Dev and Prod have different set of Keys

<img src="README/image-20210110202040524.png" alt="image-20210110202040524" style="zoom:67%;" />   <img src="README/image-20210110202109840.png" alt="image-20210110202109840" style="zoom:67%;" />  

Create a different MongoDB Atlas project and user for prod

Create a different Google Project  with OAuth APIs and credentials for prod

Within config folder, copy keys.js to dev.js, and create prod.js.

In keys.js, add logic to determine to use dev or prod keys.

Update .gitignore

keys.js

````javascript
// keys.js - figure out what ser of credentials to return

if (process.env.NODE_ENV === 'production'){
    // if app is running on Heroku, it will be automatically 'production'
    // we are in production - return the prod set of keys
    module.exports = require('./prod');

} else {
    // app running locally
    // we are in development - return the dev keys
    module.exports = require('./dev');
}
````

dev.js

```` javascript
// dev.js - Don't commit this file
module.exports = {
    googleClientID: 'xxxxxxx',
    googleClientSecret: 'xxxxxx',
    mongoURI: 'xxxxxx',
    cookieKey: 'xxxx'
};
````

prod.js

````javascript
// prod.js =- production keys here
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
};
````

![image-20210110202303093](README/image-20210110202303093.png)  

Set up Config  Vars in Heroku

![image-20210126004014834](README/image-20210126004014834.png) 

After that, commit and start heroku can run into the following error:

![image-20210110202335336](README/image-20210110202335336.png)  

Google Strategy is using relative path and it determines what domain need to be appended to the request

![image-20210110202350529](README/image-20210110202350529.png)   

Google Strategy doesn't trust any request that comes through a proxy, while Heroku is using proxy to distribute its servers

<img src="README/image-20210110202423283.png" alt="image-20210110202423283" style="zoom: 67%;" />  

Two ways to fix it:

1.use absolute path in Google Strategy

2.tell Google Strategy to trust all requests through proxy by adding one more setting

![image-20210110202440173](README/image-20210110202440173.png)  

# Client Side Setup

## npx create React App Generation

You **don’t** need to install or configure tools like webpack or Babel. They are preconfigured and hidden so that you can focus on the code.

![image-20210110202507882](README/image-20210110202507882.png)  

client folder is then created

![image-20210110202521753](README/image-20210110202521753.png)  

## React Server

![image-20210110202538747](README/image-20210110202538747.png)  



## concurrently + Start both Client (React Server) and Server (Express Server)

Use concurrently module to start both server in one command

![image-20210110202556128](README/image-20210110202556128.png)  

![image-20210110202605554](README/image-20210110202605554.png)  

![image-20210110202622181](README/image-20210110202622181.png)  



## Create React App's Proxy

- what is proxy?

  In [computer networking](https://en.wikipedia.org/wiki/Computer_networking), a **proxy server** is a [server](https://en.wikipedia.org/wiki/Server_(computing)) application or appliance that acts as an [intermediary](https://en.wikipedia.org/wiki/Intermediary) for requests from [clients](https://en.wikipedia.org/wiki/Client_(computing)) seeking resources from servers that provide those resources.[[1\]](https://en.wikipedia.org/wiki/Proxy_server#cite_note-1) A proxy server thus functions on behalf of the client when requesting service, potentially masking the true origin of the request to the resource server.

- Why proxy?

  For testing, adding relative link to React page and redirect, will run into an error. Because it will append current domain you are currently visiting to the relative link, which will be http://localhost:3000/auth/google. React server is running on port 3000, however, Express server is running on port 5000. So we are expecting http://localhost:5000/auth/google instead.

![image-20210110202654675](README/image-20210110202654675.png)  

- Proxy setup is only needed for Dev Mode

  ![image-20210110202713267](README/image-20210110202713267.png) ![image-20210110202720703](README/image-20210110202720703.png) 

  
  
  Because in Production Mode, we will build the app and deploy it on Heroku. Create-React-App Server will no longer be run, and only Express server will be running in Prod mode.
  
  <img src="README/image-20210110202738146.png" alt="image-20210110202738146" style="zoom:67%;" /> 
  
  ![image-20210110202746955](README/image-20210110202746955.png) 
  
- How ?

  ![image-20210110202810320](README/image-20210110202810320.png) 

  ![image-20210110202821527](README/image-20210110202821527.png) 

- One more thing to add for redirect, to avoid the following error:

  <img src="README/image-20210110202851236.png" alt="image-20210110202851236" style="zoom:67%;" />  

  Whitelist "http://localhost:3000/auth/google/callback“ under "Authorized redirect URIs" of your dev app to allow to redirect back to port 3000

​	<img src="README/image-20210110202905443.png" alt="image-20210110202905443" style="zoom: 80%;" /> 

 

## Why this architecture

- Current Architecture:

<img src="README/image-20210110202713267.png" alt="image-20210110202713267" style="zoom: 80%;" /> <img src="README/image-20210110202720703.png" alt="image-20210110202720703" style="zoom:80%;" /> 

- Why not this architecture below?

<img src="README/image-20210110202921945.png" alt="image-20210110202921945" style="zoom:80%;" />  <img src="README/image-20210110202928412.png" alt="image-20210110202928412" style="zoom:80%;" /> 

- Reasons:

1. cookie will not be included by default due to security concern

![image-20210110202953968](README/image-20210110202953968.png) 

similar to domain change =>

![image-20210110203006243](README/image-20210110203006243.png)   

2. Cross-origin resource sharing (CORS) : is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.

   Browser security feature

![image-20210110203019172](README/image-20210110203019172.png)  

- Go through the flow:  

proxy changes domain of these requests to http://localhost:5000/

![image-20210110202821527](README/image-20210110202821527.png) 

<img src="README/image-20210123172616145.png" alt="image-20210123172616145" style="zoom:80%;" /> 

 <img src="README/image-20210110203055088.png" alt="image-20210110203055088" style="zoom:80%;" />  

 

# Developing the Client Side

## promise

A **Promise** is an object represents the eventual completion (or failure) of an **asynchronous** operation and its resulting value.

Essentially, a promise is a returned object to which you attach callbacks. which has three states: pending, fulfilled, rejected.

One of the great things about using promises is **chaining**.

## Async Function

An async function is a function declared with the **async** keyword. Async functions are instances of the AsyncFunction constructor, and the **await** keyword is permitted within them. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

## JavaScript ES 2017 new syntax - Async/ Await

- Comparison

  <img src="README/image-20210110234957075.png" alt="image-20210110234957075" style="zoom: 50%;" />  <img src="README/image-20210110235007482.png" alt="image-20210110235007482" style="zoom: 50%;" /> 

    

- Old Syntax

  <img src="README/image-20210110235607681.png" alt="image-20210110235607681" style="zoom:80%;" /> 

  

  <img src="README/image-20210110235621057.png" alt="image-20210110235621057" style="zoom:80%;" />   

 

- New Syntax

  <img src="README/image-20210110235638128.png" alt="image-20210110235638128" style="zoom: 80%;" /> 

  

   ![image-20210110235652496](README/image-20210110235652496.png) 

  - New Syntax with Arrow function

    ![image-20210110235730129](README/image-20210110235730129.png) 

    

    ![image-20210110235745249](README/image-20210110235745249.png) 



## Refactor with Async/ Await

![image-20210110205510811](README/image-20210110205510811.png)   =>

![image-20210110205416676](README/image-20210110205416676.png) 

# Front End Tech 

## Intro

Green: back-end
Blue: front-end

<img src="README/image-20210123180652367.png" alt="image-20210123180652367" style="zoom: 80%;" /> 

Components:

![image-20210123180708238](README/image-20210123180708238.png) 

 <img src="README/image-20210123180818859.png" alt="image-20210123180818859" style="zoom: 67%;" /> <img src="README/image-20210123180834341.png" alt="image-20210123180834341" style="zoom: 67%;" /> 

## Client React Setup

![image-20210123181015536](README/image-20210123181015536.png) ![image-20210123181029687](README/image-20210123181029687.png) 

​     

Install modules under client folder

<img src="README/image-20210123181731322.png" alt="image-20210123181731322" style="zoom: 67%;" /> 

![image-20210123181752325](README/image-20210123181752325.png) 

Create index.js under /client/src, which is responsible for Redux setup
Create a folder, /components, under /client/src, and a file, App.js, under the folder, which is responsible for initial view layer

![image-20210123182004738](README/image-20210123182004738.png) ![image-20210123182013657](README/image-20210123182013657.png) 

![image-20210123182031351](README/image-20210123182031351.png) 

## Redux Review and Setup

![image-20210123182144632](README/image-20210123182144632.png) ![image-20210123182150995](README/image-20210123182150995.png) 

![image-20210123182200806](README/image-20210123182200806.png) ![image-20210123182217134](README/image-20210123182217134.png) 

<img src="README/image-20210120210435231.png" alt="image-20210120210435231" style="zoom:80%;" /> 

![image-20210123182230949](README/image-20210123182230949.png) 



## The Auth Reducer

create reducers folder under /client/src
within the folder, create reducer.js and index.js

Note: the purpose of calling this index.js is to allow us to import the reducers directory, which by convention with "import" statement will automatically give us any file inside the directory that is call index.js

![image-20210123185151354](README/image-20210123185151354.png) 

![image-20210123185200216](README/image-20210123185200216.png) 

![image-20210123185210240](README/image-20210123185210240.png) 



## React Router Setup

**react-router** is used to navigate between multiples pages/views of your front-end app/website. Usually in **a single page app**, where pages are loaded **dynamically**.
**express router** is a way to return static content (index.html, image.png...) AND to handle api calls server-side usually triggering database logic. It handles backend routes.

![image-20210123185255569](README/image-20210123185255569.png)  

![image-20210123185304696](README/image-20210123185304696.png) ![image-20210123185315140](README/image-20210123185315140.png) ![image-20210123185322186](README/image-20210123185322186.png) 

## Create class-based component for Header

create Header.js file under /client/components folder

class-based component is used to have function inside which will be responsible for deciding what to render inside component

![image-20210124012348930](README/image-20210124012348930.png) 

![image-20210124012409679](README/image-20210124012409679.png) 

## Materialize CSS handled by Webpack

![image-20210124012513597](README/image-20210124012513597.png) 

<img src="README/image-20210124012520591.png" alt="image-20210124012520591" style="zoom:67%;" /> 

https://materializecss.com/navbar.html

![image-20210124014338893](README/image-20210124014338893.png) ![image-20210124014729177](README/image-20210124014729177.png) 

![image-20210124014400099](README/image-20210124014400099.png) 

 ## Axios & Redux-Thunk + fetchUser action

**Redux Thunk middleware**: allows you to write action creators that **return a function** instead of an action. The thunk can be used to **delay the dispatch of an action, or to dispatch only if a certain condition is met**. The inner function receives the store methods dispatch and getState as parameters.

An action creator that returns a function to perform asynchronous dispatch.

**Axios**:  is a **promise based** HTTP client for the browser and Node.js. Axios makes it easy to send **asynchronous HTTP requests to REST endpoints** and perform CRUD operations. It can be used in plain JavaScript or with a library such as Vue or React.

<img src="README/image-20210124014805780.png" alt="image-20210124014805780" style="zoom: 80%;" /> <img src="README/image-20210124014822466.png" alt="image-20210124014822466" style="zoom:67%;" /> 

- Install axios and redux-thunk

  ![image-20210124014852604](README/image-20210124014852604.png) 

- Apply redux-thunk

  ![image-20210124014903691](README/image-20210124014903691.png) 

  create actions folder under /client/src folder
  within the folder, create index.js and types.js files

  ![image-20210124015026514](README/image-20210124015026514.png) ![image-20210124015031760](README/image-20210124015031760.png) 

- redux-thunk structure 

  <img src="README/image-20210124224229484.png" alt="image-20210124224229484" style="zoom:80%;" /> <img src="README/image-20210124224240104.png" alt="image-20210124224240104" style="zoom:80%;" /> 

- Apply Axios

  ![image-20210124224301526](README/image-20210124224301526.png) 

## Refactor the app.js

make App class-based component and make sure the app component can actually call an action creator

![image-20210124225619264](README/image-20210124225619264.png) 

Add log to authReducer for testing

![image-20210124230046141](README/image-20210124230046141.png) 

![image-20210126221806466](README/image-20210126221806466.png) 

## Refactor actions/index.js with Async/Await

![image-20210110204439687](README/image-20210110204439687.png)     =>   ![image-20210110205240104](README/image-20210110205240104.png) 

After Action is separated into a function:

![image-20210124233659267](README/image-20210124233659267.png)  => ![image-20210124233810317](README/image-20210124233810317.png) 

## Under payload, we only need data

![image-20210124233928016](README/image-20210124233928016.png) 

After Action is separated into a function:

![image-20210124233914414](README/image-20210124233914414.png) 

![image-20210126221934227](README/image-20210126221934227.png) 



## AuthReducer Return values by different cases

![image-20210124234053419](README/image-20210124234053419.png) 

AuthReducer Return values, default state is null

![image-20210124234133056](README/image-20210124234133056.png) 

Accessing State in the Header.js and test by console log

![image-20210124234649500](README/image-20210124234649500.png) 

When logged in:

![image-20210126220457297](README/image-20210126220457297.png) 

After logged out:

![image-20210126220417183](README/image-20210126220417183.png) 

## render content depending on auth value

![image-20210124234855661](README/image-20210124234855661.png) 

# redirect a Logged in User on Auth 

- Back end

![image-20210110220841280](README/image-20210110220841280.png) 

 After login, it's redirected to dashboard:

![image-20210126220548761](README/image-20210126220548761.png) 

# redirect on Log out

Two options:

<img src="README/image-20210111000135267.png" alt="image-20210111000135267" style="zoom:80%;" /> 

Here, we use option one, since for user experience, it doesn't matter if it takes a little bit longer to log out in most case

- Front end

![image-20210111000933502](README/image-20210111000933502.png) 

- Back end

Redirect to root, so that after log out, page will be refreshed

![image-20210111000841326](README/image-20210111000841326.png) 

# Landing component

- Front end

Create a Landing component

![image-20210111002426032](README/image-20210111002426032.png) 

![image-20210125003832050](README/image-20210125003832050.png) 

# Link Tags

Link the logo "Emaily" at the left upper corner to to root pages, and the redirects depends on if a user is logged in

Logged in: Dashboard page

Logged out: Landing page

<img src="README/image-20210111002707873.png" alt="image-20210111002707873" style="zoom: 80%;" /> 

![image-20210111003511845](README/image-20210111003511845.png) 

If a user is logged in, clicking logo will redirect to dashboard, otherwise, it will redirect to root page

![image-20210126221133104](README/image-20210126221133104.png) 

![image-20210126221346686](README/image-20210126221346686.png) 

# Change class-based component to function-based component



App.js

![image-20210125224225851](README/image-20210125224225851.png) 

Header.js

![image-20210125224347000](README/image-20210125224347000.png) 



# Handling Payments

## Construture

Green: back-end
Blue: front-end

<img src="README/image-20210125223722036.png" alt="image-20210125223722036" style="zoom:80%;" />  <img src="README/image-20210125224517070.png" alt="image-20210125224517070" style="zoom:80%;" /> 

Add Credits:

<img src="README/image-20210125224452698.png" alt="image-20210125224452698" style="zoom:80%;" /> 

Use **Stripe** to take care of payment processor

<img src="README/image-20210125224614595.png" alt="image-20210125224614595" style="zoom:80%;" /> 

## Stripe Billing Process

<img src="README/image-20210125225208497.png" alt="image-20210125225208497" style="zoom:80%;" /> 

## Front-end

### sign up Stripe

![image-20210126020324975](README/image-20210126020324975.png) 

### install front-end module to handle stripe, react-stripe-checkout

![image-20210125234555375](README/image-20210125234555375.png) 

### Setup API Keys

- Back End

![image-20210126004512012](README/image-20210126004512012.png) ![image-20210125235510518](README/image-20210125235510518.png) 

<img src="README/image-20210125235542750.png" alt="image-20210125235542750" style="zoom:80%;" /> 

- Front End

React App Adding Custom Environment Variables

https://create-react-app.dev/docs/adding-custom-environment-variables/ 

Under /client folder, create .env.development and .env.production files, and add both STRIPE publishable key

![image-20210126002810956](README/image-20210126002810956.png) 

### Payments Component

![image-20210128000013426](README/image-20210128000013426.png) 

![image-20210128001347341](README/image-20210128001347341.png) 

<img src="README/image-20210128000112210.png" alt="image-20210128000112210" style="zoom:67%;" /> 

id (token) is representing pending charge in memory. card info contains only last four digits

<img src="README/image-20210128000609196.png" alt="image-20210128000609196" style="zoom: 80%;" /> 

Adding more info in StripeCheckout and some styling 

![image-20210128001453585](README/image-20210128001453585.png) 

<img src="README/image-20210128001542831.png" alt="image-20210128001542831" style="zoom:67%;" /> 

![image-20210128001856122](README/image-20210128001856122.png) 

### Add actions to handleToken

![image-20210128003113016](README/image-20210128003113016.png) 

### Add connect to Payments and map dispatch to props

![image-20210128012349795](README/image-20210128012349795.png) 

## Back-end

### install back-end module to handle stripe, stripe

https://www.npmjs.com/package/stripe 

https://stripe.com/docs/api/charges/create 

![image-20210128004114829](README/image-20210128004114829.png) 

### install middleware body-parser

https://www.npmjs.com/package/body-parser

when you make post requests to use Express Server, Express does not by default parse the request payload. This is a middleware to parse it and make it available anywhere in the application. Parse incoming request bodies in a middleware before your handlers, available under the `req.body` property.

![image-20210128010235336](README/image-20210128010235336.png) 

### Add billingRountes for post request handler in back-end

![image-20210128012717129](README/image-20210128012717129.png) 

![image-20210128011649744](README/image-20210128011649744.png) 

![image-20210128012657255](README/image-20210128012657255.png) 

### Create a Charge Object

![image-20210128233709084](README/image-20210128233709084.png) 

### Adding credits to a User

![image-20210128231247291](README/image-20210128231247291.png) 

![image-20210128231507317](README/image-20210128231507317.png)  ![image-20210128233440163](README/image-20210128233440163.png) 

![image-20210129001833315](README/image-20210129001833315.png) 



### Add Route-Specific Middleware to make sure users are logged in

![image-20210129002000490](README/image-20210129002000490.png) 

![image-20210129010405406](README/image-20210129010405406.png) 

![image-20210129010701341](README/image-20210129010701341.png) 

## Display Credits

![image-20210129011307893](README/image-20210129011307893.png) 

<img src="README/image-20210129011321257.png" alt="image-20210129011321257" style="zoom: 80%;" /> 



# Back End to Front End Routing in Production

## Express with Create-React-App & Routing in Production

![image-20210130134810944](README/image-20210130134810944.png) 

generate production build

![image-20210130140259858](README/image-20210130140259858.png) 

In Prod Mode, Express Server need to recognize that there are some routes that it is responsible for; some routes need to send to index.html (React Routes); and some routes that are trying to access specific assets like the main.js file

![image-20210130132923267](README/image-20210130132923267.png) 

![image-20210130143040853](README/image-20210130143040853.png) 

## Deployment Options

We are taking option #2 

![image-20210130143104323](README/image-20210130143104323.png) 

https://devcenter.heroku.com/articles/nodejs-support 

<img src="README/image-20210130144722050.png" alt="image-20210130144722050" style="zoom:67%;" />   <img src="README/image-20210130163214225.png" alt="image-20210130163214225" style="zoom:67%;" /> 

![image-20210130145842030](README/image-20210130145842030.png) 

![image-20210131160808620](README/image-20210131160808620.png) ![image-20210131160829463](README/image-20210131160829463.png) 

# Mongoose for Survey Creation

## Overview Structure

<img src="README/image-20210131160856886.png" alt="image-20210131160856886" style="zoom:80%;" /> <img src="README/image-20210131161102361.png" alt="image-20210131161102361" style="zoom:80%;" /> 

Server Routes

<img src="README/image-20210131161801584.png" alt="image-20210131161801584" style="zoom:80%;" /> 

## Survey DB Model

<img src="README/image-20210131162228350.png" alt="image-20210131162228350" style="zoom: 67%;" /> 

<img src="README/image-20210131163627978.png" alt="image-20210131163627978" style="zoom:80%;" />  =>  <img src="README/image-20210131163649933.png" alt="image-20210131163649933" style="zoom:80%;" /> => 



<img src="README/image-20210131162930810.png" alt="image-20210131162930810" style="zoom:80%;" /> 

<img src="README/image-20210131163952248.png" alt="image-20210131163952248" style="zoom:80%;" />  

<img src="README/image-20210131164137866.png" alt="image-20210131164137866" style="zoom:80%;" /> 

We are not using the structure below, because of the physical limited Mongo Size for a single record. In the structure below, approximately we can only have 200k recipients in total for each User, while the structure above allows each user to have multiple survey (each survey has limitation of 200K recipients)

<img src="README/image-20210131164122209.png" alt="image-20210131164122209" style="zoom:80%;" />  <img src="README/image-20210131164337042.png" alt="image-20210131164337042" style="zoom: 67%;" /> 

![image-20210131172631340](README/image-20210131172631340.png) 

![image-20210131172646680](README/image-20210131172646680.png) 

![image-20210131172708321](README/image-20210131172708321.png) 

## Survey Creation Route

<img src="README/image-20210131201935379.png" alt="image-20210131201935379" style="zoom:80%;" /> <img src="README/image-20210131202012248.png" alt="image-20210131202012248" style="zoom:80%;" /> 

<img src="README/image-20210131202645724.png" alt="image-20210131202645724" style="zoom:80%;" /> <img src="README/image-20210131202742733.png" alt="image-20210131202742733" style="zoom:80%;" /> 

<img src="README/image-20210131202939743.png" alt="image-20210131202939743" style="zoom:80%;" />  =》  <img src="README/image-20210131203031595.png" alt="image-20210131203031595" style="zoom:80%;" /> 

<img src="README/image-20210131203333484.png" alt="image-20210131203333484" style="zoom:80%;" /> 

![image-20210131231409452](README/image-20210131231409452.png) 

![image-20210131231357132](README/image-20210131231357132.png) 

![image-20210201011028452](README/image-20210201011028452.png) 

## SendGrid

A **webhook** in [web development](https://en.wikipedia.org/wiki/Web_development) is a method of augmenting or altering the behavior of a [web page](https://en.wikipedia.org/wiki/Web_page) or [web application](https://en.wikipedia.org/wiki/Web_application) with custom [callbacks](https://en.wikipedia.org/wiki/Callback_(computer_programming)). These callbacks may be maintained, modified, and managed by third-party users and developers who may not necessarily be affiliated with the originating website or application.

<img src="README/image-20210131203603993.png" alt="image-20210131203603993" style="zoom: 67%;" />  =》<img src="README/image-20210131204420858.png" alt="image-20210131204420858" style="zoom:80%;" /> 

Register SendGrid

Add API key to both dev.js and Heroku

![image-20210131231957603](README/image-20210131231957603.png)  ![image-20210131231805050](README/image-20210131231805050.png)  

<img src="README/image-20210131231837441.png" alt="image-20210131231837441" style="zoom: 67%;" /> 

install module

![image-20210131232418861](README/image-20210131232418861.png) 

## Mailer and Templates setup

<img src="README/image-20210131202742733.png" alt="image-20210131202742733" style="zoom: 67%;" />  <img src="README/image-20210131233710361.png" alt="image-20210131233710361" style="zoom: 80%;" />  <img src="README/image-20210131235032439.png" alt="image-20210131235032439" style="zoom: 67%;" /> 



![image-20210201013757321](README/image-20210201013757321.png) 

![image-20210201014011801](README/image-20210201014011801.png) 

![image-20210201013850764](README/image-20210201013850764.png) 

Test:

![image-20210201015019323](README/image-20210201015019323.png) 

<img src="README/image-20210201014853643.png" alt="image-20210201014853643"  />  <img src="README/image-20210201014906370.png" alt="image-20210201014906370" style="zoom:80%;" /> 



 ## Polish Route Handler

![image-20210201015243733](README/image-20210201015243733.png)  

![image-20210201220236348](README/image-20210201220236348.png) 

Add redirectDomain in prod.js, dev.js and heroku config vars

![image-20210201220419831](README/image-20210201220419831.png) 

![image-20210201220317189](README/image-20210201220317189.png) 

<img src="README/image-20210201220719656.png" alt="image-20210201220719656" style="zoom:50%;" /> 

<img src="README/image-20210201220735205.png" alt="image-20210201220735205" style="zoom:50%;" />   

<img src="README/image-20210201221534229.png" alt="image-20210201221534229" style="zoom:80%;" /> 

<img src="README/image-20210201221056287.png" alt="image-20210201221056287" style="zoom: 80%;" /> 

# Back to the Client

<img src="README/image-20210201225917437.png" alt="image-20210201225917437" style="zoom:67%;" /> <img src="README/image-20210201225853701.png" alt="image-20210201225853701" style="zoom: 80%;" /> 



 