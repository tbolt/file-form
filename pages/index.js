import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Form Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>Your Name: <input type="text" name="name" /></label>   
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <span>Add file:</span>
            <input name="file" type="file"/>
          <p class="result"></p>
          
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>

      </main>

      <Footer />
    </div>
  )
}
