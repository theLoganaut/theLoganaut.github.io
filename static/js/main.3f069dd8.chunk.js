(this["webpackJsonpmy-simple-site"]=this["webpackJsonpmy-simple-site"]||[]).push([[0],{354:function(e,t,n){"use strict";n.r(t);var i=n(3),a=n.n(i),r=n(23),c=n.n(r),s=(n(76),n(13)),o=(n(77),n(78),n(358));function l(){var e=Object(i.useState)([window.innerWidth,window.innerHeight]),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){var e=function(e,t){var n,i=arguments,a=this;return function(r){clearTimeout(n),n=setTimeout((function(t){n=null,e.apply(a,i)}),t)}}((function(){console.log("***** debounced resize"),a([window.innerWidth,window.innerHeight])}),100);return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}var d=n(361),j=n(356),h=n(357),b=n(363),g=n(362),x=n(0),m=function(e){var t=e.showEmail,n=e.handleEmailClose,a=Object(i.useState)(!1),r=Object(s.a)(a,2),c=r[0],l=r[1],m=function(){return l(!c)};return Object(x.jsx)("div",{children:Object(x.jsx)(d.a,{show:t,onHide:n,children:c?Object(x.jsxs)("div",{children:[Object(x.jsx)(d.a.Header,{closeButton:!0,children:Object(x.jsx)(d.a.Title,{children:"Are you sure?"})}),Object(x.jsx)(d.a.Body,{children:Object(x.jsxs)(j.a,{children:[Object(x.jsxs)(h.a,{className:"alignC",children:[" ",Object(x.jsx)(b.a,{id:"submit_form",variant:"outline-success",size:"lg",onClick:function(){l(!1),n()},type:"submit",value:"Send",children:"YES"})]}),Object(x.jsx)(h.a,{className:"alignC",children:Object(x.jsx)(b.a,{variant:"outline-danger",size:"lg",onClick:m,children:"NO"})})]})})]}):Object(x.jsxs)("div",{children:[Object(x.jsx)(d.a.Header,{closeButton:!0,children:Object(x.jsx)(d.a.Title,{children:"Email Me!"})}),Object(x.jsxs)(d.a.Body,{children:[Object(x.jsxs)(o.a,{children:[Object(x.jsxs)(j.a,{children:[Object(x.jsx)("form",{action:"https://postmail.invotes.com/send",method:"post",id:"email_form"}),Object(x.jsx)("input",{type:"text",name:"subject",placeholder:"Subject"})]}),Object(x.jsxs)(j.a,{children:[Object(x.jsx)("textarea",{name:"text",placeholder:"Message"}),Object(x.jsx)("input",{type:"hidden",name:"access_token",value:"v1m6bd1xa83bi2m25hyg5yjb"}),Object(x.jsx)("input",{type:"hidden",name:"success_url",value:".?message=Email+Successfully+Sent%21&isError=0"}),Object(x.jsx)("input",{type:"hidden",name:"error_url",value:".?message=Email+could+not+be+sent.&isError=1"})]})]}),Object(x.jsxs)(g.a.Text,{style:{fontSize:"12px",color:"red"},children:[" ","NOTE: This doesn't remember what you wrote (yet!) so don't click out!"]})]}),Object(x.jsxs)(d.a.Footer,{children:[Object(x.jsx)(b.a,{variant:"outline-success",id:"submit_form",onClick:m,children:"Send?"}),Object(x.jsx)(b.a,{variant:"outline-danger",onClick:n,children:"Close"})]})]})})})},O=function(e){var t=e.showAbout,n=e.handleAboutClose;return Object(x.jsx)("div",{children:Object(x.jsxs)(d.a,{show:t,onHide:n,children:[Object(x.jsx)(d.a.Header,{closeButton:!0,children:Object(x.jsx)(d.a.Title,{children:" Other non-critical info; "})}),Object(x.jsxs)(d.a.Body,{children:[Object(x.jsx)(g.a.Text,{children:"- React as the framework."}),Object(x.jsx)(g.a.Text,{children:"- tsParticles for the falling effect."}),Object(x.jsx)(g.a.Text,{children:"- I look good on a mobile viewing experience too!"}),Object(x.jsx)(g.a.Text,{children:"- All images made by me."}),Object(x.jsxs)(g.a.Text,{children:["- Soon Mailing will be done with an API. So many to chose from though."," "]}),Object(x.jsxs)(g.a.Text,{className:"alignC",children:[" ","Anything I missed? Let me know with an email!"," ",Object(x.jsx)("a",{href:"mailto:logan.duncan512@gmail.com",children:"logan.duncan512@gmail.com"})," "]})]}),Object(x.jsx)(d.a.Footer,{children:Object(x.jsx)(b.a,{variant:"secondary",onClick:n,children:"Close (Onboard me quick before someone gets me first!)."})})]})})},u=n(359),y=n(360),p=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(!1),c=Object(s.a)(r,2),o=c[0],l=c[1];return Object(x.jsxs)("div",{children:[Object(x.jsxs)(j.a,{className:"outline",style:{marginTop:"1%"},children:[Object(x.jsx)(h.a,{style:{textAlign:"right"},md:3,children:" "}),Object(x.jsxs)(h.a,{children:[Object(x.jsxs)(j.a,{children:[Object(x.jsxs)(h.a,{children:[Object(x.jsx)(j.a,{children:Object(x.jsx)("p",{className:"fontL",children:"Front end focus,"})}),Object(x.jsxs)(j.a,{style:{textAlign:"right",marginTop:"-5%",overflow:"false",width:"120%"},children:[" ",Object(x.jsx)("p",{className:"fontL",children:"Back end sprinkle,"})," "]}),Object(x.jsx)(j.a,{style:{fontSize:"70px",textAlign:"right",marginTop:"-5%",marginRight:"1%"},children:Object(x.jsx)("p",{children:" Logan"})})]}),Object(x.jsx)(h.a,{style:{textAlign:"center"},children:Object(x.jsxs)(u.a,{vertical:!0,style:{},children:[Object(x.jsx)(b.a,{variant:"link",style:{fontSize:"28px",padding:".5rem 3rem"},href:"mailto:logan.duncan512@gmail.com",children:"Email Me"}),Object(x.jsx)(b.a,{variant:"link",style:{fontSize:"28px",padding:".5rem 3rem"},onClick:function(){return window.open("https://github.com/theLoganaut")},children:"Github"}),Object(x.jsx)(b.a,{variant:"link",style:{fontSize:"28px",padding:".5rem 3rem"},onClick:l,children:"About.this()"})]})})]}),Object(x.jsxs)(j.a,{children:[Object(x.jsx)(h.a,{children:Object(x.jsx)(y.a,{style:{marginTop:"-5%",display:"block",marginLeft:"auto",maxWidth:"50%",height:"auto",justifyContent:"right"},src:"https://s3.amazonaws.com/myfree.bucket/glassfixoutlinePFP500x500.jpg",roundedCircle:!0})}),Object(x.jsxs)(h.a,{style:{marginTop:"-6%"},children:[Object(x.jsx)(j.a,{style:{fontSize:"70px",marginLeft:"-9%"},children:"Duncan"}),Object(x.jsx)(j.a,{style:{fontSize:"32px",marginTop:"",marginLeft:"5%"},children:"is here to become a strong member of your software team."})]})]})]}),Object(x.jsx)(h.a,{style:{textAlign:"left"},md:3,children:" "})]}),Object(x.jsxs)(j.a,{style:{marginTop:"1%"},children:[Object(x.jsx)(h.a,{}),Object(x.jsx)(h.a,{style:{textAlign:"center"},children:Object(x.jsx)(j.a,{style:{textAlign:"center"},children:Object(x.jsxs)(j.a,{children:[Object(x.jsx)("p",{style:{fontSize:"24px",textDecoration:"underline"},children:"LEGEND & SKILLSET"}),Object(x.jsxs)(j.a,{style:{marginBottom:"5%"},children:[Object(x.jsx)(h.a,{style:{marginRight:"-50%"},children:Object(x.jsx)(g.a,{style:{width:"30%",background:"lightgray",borderStyle:"hidden"},children:Object(x.jsx)(g.a.Img,{src:"/images/myStack.png"})})}),Object(x.jsx)(h.a,{children:Object(x.jsx)(g.a,{border:"secondary",style:{width:"120%",background:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"JavaScript, HTML, CSS in a React environment."})})})]}),Object(x.jsxs)(j.a,{style:{marginBottom:"5%"},children:[Object(x.jsx)(h.a,{style:{marginRight:"-50%"},children:Object(x.jsx)(g.a,{style:{width:"30%",background:"lightgray",borderStyle:"hidden"},children:Object(x.jsx)(g.a.Img,{src:"/images/awsStack.png"})})}),Object(x.jsx)(h.a,{children:Object(x.jsx)(g.a,{border:"secondary",style:{width:"120%",background:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"AWS Cloud Practitioner working on my Solutions Architect."})})})]}),Object(x.jsxs)(j.a,{style:{marginBottom:"5%"},children:[Object(x.jsx)(h.a,{style:{marginRight:"-50%"},children:Object(x.jsx)(g.a,{style:{width:"30%",background:"lightgray",borderStyle:"hidden"},children:Object(x.jsx)(g.a.Img,{src:"/images/backendSprinkle.png"})})}),Object(x.jsx)(h.a,{children:Object(x.jsx)(g.a,{border:"secondary",style:{width:"120%",background:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"ExpressJs and Backend Concepts, like Routing, Auth & Auth, and Data Security."})})})]}),Object(x.jsxs)(j.a,{style:{marginBottom:"5%"},children:[Object(x.jsx)(h.a,{style:{marginRight:"-50%"},children:Object(x.jsx)(g.a,{style:{width:"30%",background:"lightgray",borderStyle:"hidden"},children:Object(x.jsx)(g.a.Img,{src:"/images/designInMind.png"})})}),Object(x.jsx)(h.a,{children:Object(x.jsx)(g.a,{border:"secondary",style:{width:"120%",background:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"Designing aesthetically pleasing user orientated views and reusable APIs for developers."})})})]})]})})}),Object(x.jsx)(h.a,{style:{textAlign:"center"},children:Object(x.jsxs)(j.a,{style:{textAlign:"center"},children:[Object(x.jsxs)(j.a,{children:[Object(x.jsx)("p",{style:{fontSize:"24px",textDecoration:"underline"},children:"ASPIRATIONS"}),Object(x.jsx)(g.a,{border:"secondary",style:{marginBottom:"2%",backgroundColor:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"Grow from a developer only position, to a design and development position."})})]}),Object(x.jsx)(j.a,{children:Object(x.jsx)(g.a,{border:"secondary",style:{marginBottom:"2%",backgroundColor:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"Learn Electron and use it to develop GUI-based games to showcase my creativity and skill set better."})})}),Object(x.jsx)(j.a,{children:Object(x.jsx)(g.a,{border:"secondary",style:{marginBottom:"2%",backgroundColor:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"Move on from the current and into the future by developing NFTs (and maybe biotech! I'm a neuralink nerd)."})})}),Object(x.jsx)(j.a,{children:Object(x.jsx)(g.a,{border:"secondary",style:{marginBottom:"2%",backgroundColor:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"Learn Java/C# to not only round my knowledge out, but also slowly work on developing the RTS that pulls RTS games back from the dead."})})})]})}),Object(x.jsx)(h.a,{style:{textAlign:"center"},children:Object(x.jsxs)(j.a,{style:{textAlign:"center"},children:[Object(x.jsxs)(j.a,{children:[Object(x.jsx)("p",{style:{fontSize:"24px",textDecoration:"underline"},children:"ME, AN OVERVIEW"}),Object(x.jsx)(g.a,{border:"secondary",style:{marginBottom:"2%",backgroundColor:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"An enthusiastic, confident, tech-loving-20-something looking to start a career after finding my passion, creating with code."})})]}),Object(x.jsx)(j.a,{children:Object(x.jsx)(g.a,{border:"secondary",style:{marginBottom:"2%",backgroundColor:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"Persevering in my efforts to teach myself code taught me a lot, not only about code but also things like; Organization, Iteratitive Orientation, Workflow, GoogleFu, Versioning, Redundancy, Security, and so much more."})})}),Object(x.jsx)(j.a,{children:Object(x.jsxs)(g.a,{border:"secondary",style:{marginBottom:"2%",backgroundColor:"lightgray"},children:[Object(x.jsx)(g.a.Text,{children:"Coms and Co-op; As big team gamer, I know that communication and cooperation are extremely vital to any operation, but especially software development."}),Object(x.jsx)(g.a.Text,{style:{marginTop:"-5%"},children:"Bad communication = Bad product."})]})})]})}),Object(x.jsx)(h.a,{})]}),Object(x.jsx)(j.a,{children:Object(x.jsx)("div",{style:{position:"fixed",top:"5%",left:"95%",overflow:"visible",maxWidth:"10em"}})}),Object(x.jsx)(m,{showEmail:n,handleEmailClose:function(){return a(!1)},handleEmailOpen:function(){return a(!0)}}),Object(x.jsx)(O,{showAbout:o,handleAboutClose:function(){return l(!1)},handleAboutOpen:function(){return l(!0)}})]})},f=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(!1),c=Object(s.a)(r,2),o=c[0],l=c[1];return Object(x.jsxs)("div",{children:[Object(x.jsxs)(j.a,{className:"outline",style:{marginTop:"1%"},children:[Object(x.jsx)(h.a,{style:{textAlign:"right"},md:3,children:" "}),Object(x.jsxs)(h.a,{children:[Object(x.jsxs)(j.a,{children:[Object(x.jsxs)(h.a,{children:[Object(x.jsx)(j.a,{children:Object(x.jsx)("p",{className:"medFontL alignC",children:"Front end focus,"})}),Object(x.jsxs)(j.a,{style:{textAlign:"right",marginTop:"-5%",overflow:"false",width:"120%"},children:[" ",Object(x.jsx)("p",{className:"medFontL",children:"Back end sprinkle,"})," "]}),Object(x.jsx)(j.a,{style:{fontSize:"60px",textAlign:"right",marginTop:"-5%",marginRight:"1%"},children:Object(x.jsx)("p",{children:" Logan"})})]}),Object(x.jsx)(h.a,{style:{textAlign:"center"},children:Object(x.jsxs)(u.a,{vertical:!0,style:{},children:[Object(x.jsx)(b.a,{variant:"link",style:{fontSize:"22px",padding:".5rem 3rem"},href:"mailto:logan.duncan512@gmail.com",children:"Email Me"}),Object(x.jsx)(b.a,{variant:"link",style:{fontSize:"22px",padding:".5rem 2rem"},onClick:function(){return window.open("https://github.com/theLoganaut")},children:"Github"}),Object(x.jsx)(b.a,{variant:"link",style:{fontSize:"22px",padding:".5rem 2rem"},onClick:l,children:"About.this()"})]})})]}),Object(x.jsxs)(j.a,{children:[Object(x.jsx)(h.a,{children:Object(x.jsx)(y.a,{style:{marginTop:"-5%",display:"block",marginLeft:"auto",maxWidth:"70%",height:"auto",justifyContent:"right"},src:"https://s3.amazonaws.com/myfree.bucket/glassfixoutlinePFP500x500.jpg",roundedCircle:!0})}),Object(x.jsxs)(h.a,{style:{marginTop:"-6%"},children:[Object(x.jsx)(j.a,{style:{fontSize:"60px",marginLeft:"-9%"},children:"Duncan"}),Object(x.jsx)(j.a,{style:{fontSize:"22px",marginTop:"",marginLeft:"5%"},children:"is here to become a strong member of your software team."})]})]})]}),Object(x.jsx)(h.a,{style:{textAlign:"left"},md:3})]}),Object(x.jsxs)(j.a,{style:{marginTop:"1%"},children:[Object(x.jsx)(h.a,{}),Object(x.jsx)(h.a,{style:{textAlign:"center"},children:Object(x.jsx)(j.a,{style:{textAlign:"center"},children:Object(x.jsxs)(j.a,{children:[Object(x.jsx)("p",{style:{fontSize:"20px",textDecoration:"underline"},children:"LEGEND & SKILLSET"}),Object(x.jsxs)(j.a,{style:{marginBottom:"2%"},children:[Object(x.jsx)(g.a,{style:{background:"rgba(211,211,211, .5)",borderStyle:"hidden",marginBottom:"2%"},children:Object(x.jsxs)("div",{className:"alignC",children:[Object(x.jsx)(g.a.Img,{style:{width:"70%"},src:"/images/myStack.png"})," "]})}),Object(x.jsx)(g.a,{border:"secondary",style:{width:"120%",background:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"JavaScript, HTML, CSS in a React environment."})})]}),Object(x.jsxs)(j.a,{style:{marginBottom:"2%"},children:[Object(x.jsx)(g.a,{style:{background:"rgba(211,211,211, .5)",borderStyle:"hidden",marginBottom:"2%"},children:Object(x.jsxs)("div",{className:"alignC",children:[" ",Object(x.jsx)(g.a.Img,{style:{width:"70%"},src:"/images/awsStack.png"})]})}),Object(x.jsx)(g.a,{border:"secondary",style:{width:"120%",background:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"AWS Cloud Practitioner working on my Solutions Architect."})})]}),Object(x.jsxs)(j.a,{style:{marginBottom:"2%"},children:[Object(x.jsx)(g.a,{style:{background:"rgba(211,211,211, .5)",borderStyle:"hidden",marginBottom:"2%"},children:Object(x.jsx)("div",{className:"alignC",children:Object(x.jsx)(g.a.Img,{style:{width:"70%"},src:"/images/backendSprinkle.png"})})}),Object(x.jsx)(g.a,{border:"secondary",style:{width:"120%",background:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"ExpressJs and Backend Concepts, like Routing, Auth & Auth, and Data Security."})})]}),Object(x.jsxs)(j.a,{style:{marginBottom:"2%"},children:[Object(x.jsx)(g.a,{style:{background:"rgba(211,211,211, .5)",borderStyle:"hidden",marginBottom:"2%"},children:Object(x.jsx)("div",{className:"alignC",children:Object(x.jsx)(g.a.Img,{style:{width:"70%"},src:"/images/designInMind.png"})})}),Object(x.jsx)(g.a,{border:"secondary",style:{width:"120%",background:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"Designing aesthetically pleasing user orientated views and reusable APIs for developers."})})]})]})})}),Object(x.jsx)(h.a,{style:{textAlign:"center"},children:Object(x.jsxs)(j.a,{style:{textAlign:"center"},children:[Object(x.jsxs)(j.a,{children:[Object(x.jsx)("p",{style:{fontSize:"20px",textDecoration:"underline"},children:"ASPIRATIONS"}),Object(x.jsx)(g.a,{border:"secondary",style:{marginBottom:"2%",backgroundColor:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"Grow from a developer only position, to a design and development position."})})]}),Object(x.jsx)(j.a,{children:Object(x.jsx)(g.a,{border:"secondary",style:{marginBottom:"2%",backgroundColor:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"Learn Electron and use it to develop GUI-based games to showcase my creativity and skill set better."})})}),Object(x.jsx)(j.a,{children:Object(x.jsx)(g.a,{border:"secondary",style:{marginBottom:"2%",backgroundColor:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"Move on from the current and into the future by developing NFTs (and maybe biotech! I'm a neuralink nerd)."})})}),Object(x.jsx)(j.a,{children:Object(x.jsx)(g.a,{border:"secondary",style:{marginBottom:"2%",backgroundColor:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"Learn Java/C# to not only round my knowledge out, but also slowly work on developing the RTS that pulls RTS games back from the dead."})})})]})}),Object(x.jsx)(h.a,{style:{textAlign:"center"},children:Object(x.jsxs)(j.a,{style:{textAlign:"center"},children:[Object(x.jsxs)(j.a,{children:[Object(x.jsx)("p",{style:{fontSize:"20px",textDecoration:"underline"},children:"ME, AN OVERVIEW"}),Object(x.jsx)(g.a,{border:"secondary",style:{marginBottom:"2%",backgroundColor:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"An enthusiastic, confident, tech-loving-20-something looking to start a career after finding my passion, creating with code."})})]}),Object(x.jsx)(j.a,{children:Object(x.jsx)(g.a,{border:"secondary",style:{marginBottom:"2%",backgroundColor:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"Persevering in my efforts to teach myself code taught me a lot, not only about code but also things like; Organization, Iteratitive Orientation, Workflow, GoogleFu, Versioning, Redundancy, Security, and so much more."})})}),Object(x.jsx)(j.a,{children:Object(x.jsxs)(g.a,{border:"secondary",style:{marginBottom:"2%",backgroundColor:"lightgray"},children:[Object(x.jsx)(g.a.Text,{children:"Coms and Co-op; As big team gamer, I know that communication and cooperation are extremely vital to any operation, but especially software development."}),Object(x.jsx)(g.a.Text,{style:{marginTop:"-5%"},children:"Bad communication = Bad product."})]})})]})}),Object(x.jsx)(h.a,{})]}),Object(x.jsx)(j.a,{children:Object(x.jsx)("div",{style:{position:"fixed",top:"5%",left:"95%",overflow:"visible",maxWidth:"10em"}})}),Object(x.jsx)(m,{showEmail:n,handleEmailClose:function(){return a(!1)},handleEmailOpen:function(){return a(!0)}}),Object(x.jsx)(O,{showAbout:o,handleAboutClose:function(){return l(!1)},handleAboutOpen:function(){return l(!0)}})]})},k=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(!1),c=Object(s.a)(r,2),o=c[0],l=c[1];return Object(x.jsxs)("div",{children:[Object(x.jsxs)(j.a,{className:"outline",style:{marginTop:"1%"},children:[Object(x.jsx)(h.a,{style:{textAlign:"right"},md:3,children:" "}),Object(x.jsxs)(h.a,{children:[Object(x.jsxs)(j.a,{children:[Object(x.jsxs)(h.a,{children:[Object(x.jsx)(j.a,{children:Object(x.jsx)("p",{className:"mobFontL alignC",children:"Front end focus,"})}),Object(x.jsxs)(j.a,{style:{textAlign:"right",marginTop:"-5%",overflow:"false",width:"120%"},children:[" ",Object(x.jsx)("p",{className:"mobFontL",children:"Back end sprinkle,"})," "]}),Object(x.jsx)(j.a,{style:{fontSize:"50px",textAlign:"right",marginTop:"-5%",marginRight:"1%"},children:Object(x.jsx)("p",{children:" Logan"})})]}),Object(x.jsx)(h.a,{style:{textAlign:"center"},children:Object(x.jsxs)(u.a,{vertical:!0,style:{},children:[Object(x.jsx)(b.a,{variant:"link",style:{fontSize:"18px",padding:".5rem 3rem"},href:"mailto:logan.duncan512@gmail.com",children:"Email Me"}),Object(x.jsx)(b.a,{variant:"link",style:{fontSize:"18px",padding:".5rem 2rem"},onClick:function(){return window.open("https://github.com/theLoganaut")},children:"Github"}),Object(x.jsx)(b.a,{variant:"link",style:{fontSize:"18px",padding:".5rem 2rem"},onClick:l,children:"About.this()"})]})})]}),Object(x.jsxs)(j.a,{children:[Object(x.jsx)(h.a,{children:Object(x.jsx)(y.a,{style:{marginTop:"-5%",display:"block",marginLeft:"auto",maxWidth:"70%",height:"auto",justifyContent:"right"},src:"https://s3.amazonaws.com/myfree.bucket/glassfixoutlinePFP500x500.jpg",roundedCircle:!0})}),Object(x.jsxs)(h.a,{style:{marginTop:"-6%"},children:[Object(x.jsx)(j.a,{style:{fontSize:"50px",marginLeft:"-9%"},children:"Duncan"}),Object(x.jsx)(j.a,{style:{fontSize:"16px",marginTop:"",marginLeft:"5%"},children:"is here to become a strong member of your software team."})]})]})]}),Object(x.jsx)(h.a,{md:3})]}),Object(x.jsxs)(j.a,{className:"alignC",children:[" ",Object(x.jsx)(h.a,{md:3,xs:1}),Object(x.jsxs)(h.a,{children:[Object(x.jsx)("p",{className:"alignC",style:{fontSize:"20px",textDecoration:"underline",marginTop:"4%"},children:"LEGEND & SKILLSET"}),Object(x.jsxs)(j.a,{style:{marginBottom:"2%"},children:[Object(x.jsx)(h.a,{children:Object(x.jsxs)(g.a,{style:{background:"rgba(211,211,211, .1)",borderStyle:"hidden"},children:[Object(x.jsx)(g.a.Img,{style:{width:"50%",marginTop:"10%"},src:"/images/myStack.png"})," "]})}),Object(x.jsx)(h.a,{children:Object(x.jsx)(g.a,{border:"secondary",style:{width:"120%",marginLeft:"-40%",background:"lightgray",top:"10%"},children:Object(x.jsx)(g.a.Text,{children:"JavaScript, HTML, CSS in a React environment."})})})]}),Object(x.jsxs)(j.a,{style:{marginBottom:"2%"},children:[Object(x.jsx)(h.a,{children:Object(x.jsxs)(g.a,{style:{background:"rgba(211,211,211, .1)",borderStyle:"hidden"},children:[Object(x.jsx)(g.a.Img,{style:{width:"50%",marginTop:"10%"},src:"/images/awsStack.png"})," "]})}),Object(x.jsx)(h.a,{children:Object(x.jsx)(g.a,{border:"secondary",style:{width:"120%",marginLeft:"-40%",background:"lightgray",top:"10%"},children:Object(x.jsx)(g.a.Text,{children:"AWS Cloud Practitioner working on my Solutions Architect."})})})]}),Object(x.jsxs)(j.a,{style:{marginBottom:"2%"},children:[Object(x.jsx)(h.a,{children:Object(x.jsxs)(g.a,{style:{background:"rgba(211,211,211, .1)",borderStyle:"hidden",marginBottom:"2%"},children:[Object(x.jsx)(g.a.Img,{style:{width:"50%",marginTop:"10%"},src:"/images/backendSprinkle.png"})," "]})}),Object(x.jsx)(h.a,{children:Object(x.jsx)(g.a,{border:"secondary",style:{width:"120%",marginLeft:"-40%",background:"lightgray",top:"10%"},children:Object(x.jsx)(g.a.Text,{children:"ExpressJs and Backend Concepts, like Routing, Auth & Auth, and Data Security."})})})]}),Object(x.jsxs)(j.a,{style:{marginBottom:"2%"},children:[Object(x.jsx)(h.a,{children:Object(x.jsxs)(g.a,{style:{background:"rgba(211,211,211, .1)",borderStyle:"hidden",marginBottom:"2%"},children:[Object(x.jsx)(g.a.Img,{style:{width:"50%",marginTop:"10%"},src:"/images/designInMind.png"})," "]})}),Object(x.jsx)(h.a,{children:Object(x.jsx)(g.a,{border:"secondary",style:{width:"120%",marginLeft:"-40%",background:"lightgray",top:"10%"},children:Object(x.jsx)(g.a.Text,{children:"Designing aesthetically pleasing user orientated views and reusable APIs for developers."})})})]}),Object(x.jsxs)("div",{children:[Object(x.jsxs)(j.a,{children:[Object(x.jsx)("p",{className:"alignC",style:{fontSize:"20px",textDecoration:"underline",marginTop:"4%"},children:"ASPIRATIONS"}),Object(x.jsx)(j.a,{children:Object(x.jsxs)("div",{children:[Object(x.jsx)(g.a,{border:"secondary",style:{marginBottom:"2%",backgroundColor:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"Grow from a developer only position, to a design and development position."})})," "]})}),Object(x.jsx)(j.a,{children:Object(x.jsxs)("div",{className:"alignC",children:[" ",Object(x.jsx)(g.a,{border:"secondary",style:{marginBottom:"2%",backgroundColor:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"Learn Electron and use it to develop GUI-based games to showcase my creativity and skill set better."})})]})}),Object(x.jsx)(j.a,{children:Object(x.jsxs)("div",{className:"alignC",children:[Object(x.jsx)(g.a,{border:"secondary",style:{marginBottom:"2%",backgroundColor:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"Move on from the current and into the future by developing NFTs (and maybe biotech! I'm a neuralink nerd)."})})," "]})}),Object(x.jsx)(j.a,{children:Object(x.jsxs)("div",{className:"alignC",children:[" ",Object(x.jsx)(g.a,{border:"secondary",style:{marginBottom:"2%",backgroundColor:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"Learn Java/C# to not only round my knowledge out, but also slowly work on developing the RTS that pulls RTS games back from the dead."})})]})})]})," "]}),Object(x.jsxs)(j.a,{children:[Object(x.jsx)("p",{className:"alignC",style:{fontSize:"20px",textDecoration:"underline",marginTop:"4%"},children:"ME, AN OVERVIEW"}),Object(x.jsx)(g.a,{border:"secondary",style:{marginBottom:"2%",backgroundColor:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"An enthusiastic, confident, tech-loving-20-something looking to start a career after finding my passion, creating with code."})})]}),Object(x.jsx)(j.a,{children:Object(x.jsx)(g.a,{border:"secondary",style:{marginBottom:"2%",backgroundColor:"lightgray"},children:Object(x.jsx)(g.a.Text,{children:"Persevering in my efforts to teach myself code taught me a lot, not only about code but also things like; Organization, Iteratitive Orientation, Workflow, GoogleFu, Versioning, Redundancy, Security, and so much more."})})}),Object(x.jsx)(j.a,{children:Object(x.jsxs)(g.a,{border:"secondary",style:{marginBottom:"2%",backgroundColor:"lightgray"},children:[Object(x.jsx)(g.a.Text,{children:"Coms and Co-op; As big team gamer, I know that communication and cooperation are extremely vital to any operation, but especially software development."}),Object(x.jsx)(g.a.Text,{className:"alignC",style:{marginTop:"-5%"},children:"Bad communication = Bad product."})]})})]}),Object(x.jsx)(h.a,{md:3,xs:1})]}),Object(x.jsx)(j.a,{children:Object(x.jsx)("div",{style:{position:"fixed",top:"5%",left:"95%",overflow:"visible",maxWidth:"10em"}})}),Object(x.jsx)(m,{showEmail:n,handleEmailClose:function(){return a(!1)},handleEmailOpen:function(){return a(!0)}}),Object(x.jsx)(O,{showAbout:o,handleAboutClose:function(){return l(!1)},handleAboutOpen:function(){return l(!0)}})]})},v=n(69),w=n.n(v),S={background:{color:{value:"#D3D3D3"},position:"50% 50%",repeat:"no-repeat",size:"cover",opactiy:0},fullScreen:{zIndex:-1},interactivity:{events:{onClick:{enable:!0,mode:"repulse"},onHover:{enable:!0,mode:"bubble"}},modes:{bubble:{distance:400,duration:.3,opacity:1,size:40},grab:{distance:300,links:{opacity:.2}}}},particles:{shape:{type:"images",options:{images:[{src:"/images/javascriptSymbolColor.png",width:500,height:500},{src:"/images/awsCloudTall.png",width:500,height:300},{src:"/images/reactColored.png",width:500,height:500},{src:"/images/designCogBW.png",width:500,height:500},{src:"/images/htmlAndCssBW.png",width:500,height:500},{src:"/images/lightbulbColored.png",width:500,height:500},{src:"/images/serversColored.png",width:500,height:500},{src:"/images/lockedInfoBW.png",width:500,height:500},{src:"/images/websitePlug.png",width:500,height:500},{src:"/images/defaultPFP.png",width:500,height:500},{src:"/images/apiThroughput.png",width:500,height:500},{src:"/images/certifiedLazy.png",width:500,height:500}]}},links:{color:{value:"#ffffff"},distance:500,opacity:.4,width:2},move:{attract:{rotate:{x:600,y:1200}},direction:"bottom",enable:!0,path:{},outModes:{bottom:"out",left:"out",right:"out",top:"out"},spin:{}},number:{density:{enable:!0},limit:90,value:400},opacity:{random:{enable:!0},value:{min:.2,max:.5},animation:{speed:1,minimumValue:.1}},size:{random:{enable:!0},value:{min:1,max:20},animation:{speed:30,minimumValue:.1}}}};var T=function(){var e=l(),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(!1),c=Object(s.a)(r,2),d=c[0],j=c[1],h=Object(i.useState)(!1),b=Object(s.a)(h,2),g=b[0],m=b[1],O=Object(i.useState)(!1),u=Object(s.a)(O,2),y=u[0],v=u[1];return Object(i.useEffect)((function(){n>=1200?(m(!1),j(!0),v(!1)):n>=800?(m(!0),j(!1),v(!1)):(m(!1),j(!1),v(!0))}),[n,a]),Object(x.jsx)(o.a,{fluid:!0,style:{height:"100vh"},children:Object(x.jsxs)("div",{style:{position:"absolute",top:0,left:0,width:"100wh",height:"100vh",overflowX:"hidden"},children:[Object(x.jsx)(w.a,{id:"tsparticles",options:S,init:function(e){},loaded:function(e){}}),Object(x.jsxs)("div",{style:{width:"100%",height:"100%"},children:[d?Object(x.jsx)(p,{}):Object(x.jsx)(x.Fragment,{}),g?Object(x.jsx)(f,{}):Object(x.jsx)(x.Fragment,{}),y?Object(x.jsx)(k,{}):Object(x.jsx)(x.Fragment,{})]})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,364)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))};c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(T,{})}),document.getElementById("root")),C()},76:function(e,t,n){},77:function(e,t,n){}},[[354,1,2]]]);
//# sourceMappingURL=main.3f069dd8.chunk.js.map