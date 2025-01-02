export default function Page() {

    const email = process.env.EMAIL;

    return (
        <>
            <p>You can contact me at my email at {email}</p>
            

        </>

    )
};