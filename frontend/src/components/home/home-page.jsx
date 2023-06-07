import Image from "next/image";

export const HomePage = () => (
  <main>
    <div className='home-container'>
      <Image
        src="/bg-home.webp"
        width={0}
        height={0}
        style={{ width: "100%", height: "auto" }}
        sizes="100vw"
      />

      <h1>Les sorties culturelles à Marseille</h1>

      <div className='introduction-container'>
        <Image 
          src="/home-drawing.svg"
          width={300}
          height={350}
        />
        <div className="introduction-container-paragraphs">
          <p>
          La ville de Marseille est la 2ème ville de France avec l’offre de musées la plus développée avec 26 musées. Elle offre un grand choix d’expositions, d’évènements et d’ateliers culturels tout au long de l’année avec des cadres uniques (Mucem, Palais Longchamps).
          </p>
          <p>
          J’ai créé ce site afin de partager ma passion des musées et de permettre aux gens de pouvoir facilement accéder aux expositions de ma ville en offrant un calendrier pour gérer ses sorties et pouvoir y accéder en quelques clicks. 
          </p>
          <p>
          N’hésitez pas à me contacter par e-mail si vous vous rencontrez des bugs lors de l’utilisation du site en vous rendant en bas de page et en cliquant dans l’onglet “Contact”.
          </p>
        </div>
      </div>

    </div>
  </main>
);