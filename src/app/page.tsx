
export default function Home() {

  const firstName = process.env.FIRST_NAME;
  const lastName = process.env.FIRST_NAME;
  const email = process.env.EMAIL;


  return (
    <div>
      <p>Hello! Welcome to my website. </p>
      <p>My name is {firstName} {lastName} and I have been collecting Chinese antiques for over 10 years.</p>
      <p>I love discovering antiques. Behind every piece is a story that connects to the landscape of Chinese history. </p>


      <p>On my website you can browse through all of my collection, from vases from the 17th century to tiny cups used by emperors in the 19th century</p>
      
      <p>For any inquiries, please feel free to contact me at: {email}</p>

    </div>
  );
}
