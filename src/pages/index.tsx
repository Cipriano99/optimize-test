import Head from 'next/head'
import styles from '@/src/styles/Home.module.css'
import { useEffect, useState } from 'react'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: any;
    google_optimize: any
  }
}

const simpleUserList = [
  {name: 'Test user 01', age: 20, email: 'testuser01@test.com'},
  {name: 'Test user 02', age: 20, email: 'testuser02@test.com'},
  {name: 'Test user 03', age: 20, email: 'testuser03@test.com'},
  {name: 'Test user 04', age: 20, email: 'testuser04@test.com'},
  {name: 'Test user 05', age: 20, email: 'testuser05@test.com'},
  {name: 'Test user 06', age: 20, email: 'testuser06@test.com'},
  {name: 'Test user 07', age: 20, email: 'testuser07@test.com'},
  {name: 'Test user 08', age: 20, email: 'testuser08@test.com'},
  {name: 'Test user 09', age: 20, email: 'testuser09@test.com'},
  {name: 'Test user 10', age: 20, email: 'testuser10@test.com'},
  {name: 'Test user 11', age: 20, email: 'testuser11@test.com'},
  {name: 'Test user 12', age: 20, email: 'testuser12@test.com'},
  {name: 'Test user 13', age: 20, email: 'testuser13@test.com'},
  {name: 'Test user 14', age: 20, email: 'testuser14@test.com'},
  {name: 'Test user 15', age: 20, email: 'testuser15@test.com'},
  {name: 'Test user 16', age: 20, email: 'testuser16@test.com'},
  {name: 'Test user 17', age: 20, email: 'testuser17@test.com'},
  {name: 'Test user 18', age: 20, email: 'testuser18@test.com'},
  {name: 'Test user 19', age: 20, email: 'testuser19@test.com'},
  {name: 'Test user 20', age: 20, email: 'testuser20@test.com'},
  {name: 'Test user 21', age: 20, email: 'testuser21@test.com'},
  {name: 'Test user 22', age: 20, email: 'testuser22@test.com'},
  {name: 'Test user 23', age: 20, email: 'testuser23@test.com'},
  {name: 'Test user 24', age: 20, email: 'testuser24@test.com'},
  {name: 'Test user 25', age: 20, email: 'testuser25@test.com'},
]

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => setIsLoading(false), 800)

  const optimizerFunction = async () => {
    const dataLayer = window.dataLayer || [];

    if (dataLayer) {
      await dataLayer.push({ event: "optimize.activate" });
    }  
  };

  useEffect(() => {
    optimizerFunction();
  }, []);

  return (
    <>
      <Head>
        <title>Test Google Optimizer</title>
        <meta name="description" content="Google Optimizer on React application build with NextJs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Lista teste de usuários</h1>
        <p>TESTE</p>

      {isLoading ? <span>Carregando lista de usuários...</span> : (
        <table>
            <tr>
              {Object.keys(simpleUserList[0]).map(
                item => <th key={item}>{item}</th>
              )}
            </tr>

              {simpleUserList.map( 
                user => (
                  <tr key-={user.email}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                  </tr>
                )
              )}
          </table>
        )}
      </main>
    </>
  )
}
