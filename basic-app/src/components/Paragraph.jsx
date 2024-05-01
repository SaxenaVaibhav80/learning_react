// import react from 'react '
// props are immutable means you will not able edit the props otherwise it will give you an error 

function Paragraph(props)
{
    return(
         <>
         this is children props coming from parent--:
        <h1> {props.children}</h1>
        <p>
         hi me Pat Cummins Hello, from Lucknow. I hold a B.Tech in Information Technology from PES University. For the past 3 years, I’ve been working with Infosys as a Technical Support Engineer where I troubleshoot complex software application issues. I have handled support calls for over 5000 clients with a 95% customer satisfaction rate. Through continuously learning new programming languages and frameworks on the job, I’ve become passionate about making the transition into a full-time software engineering role. My top technical strengths are JavaScript, Java, and Python. I now hope to utilize these skills as part of XYZ’s product development team. Apart from work, I enjoy playing badminton and cooking. I appreciate you considering me for this opportunity. 
        </p>
        </>

    ) 
}


export default  Paragraph