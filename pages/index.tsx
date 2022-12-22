import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import title from "../public/title.png";
import netflix from "../public/netflix2.jpg";
import imdb from "../public/ımdb.jpg";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className="flex justify-center">
          <Image
            src={title}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div className="max-w-[50%]">
          <div className="mb-[100px] mt-[300px]">
            <h4 className={styles.titleH1}> Nedir bu "Rick and Morty" ?</h4>
            <text>
              Rick Sanchez aklına gelen her şeyi bilimsel olarak
              gerçekleştirebilen dahi, alkolik ve çılgın bir bilim adamıdır.
              Kızı Beth ve onun ailesiyle birlikte yaşamaktadır. Portallar
              açarak diyardan diyara, gezegenden gezegene yolculuk etmek Rick’in
              rutin eğlenceleri arasındadır. Torunu Morty, çok geçmeden
              dedesinin etki alanına girer ve sıkıcı okul derslerini, Rick ile
              çıktığı çılgın serüvenler ile takas etmeye başlar. İkili arasında
              eğlenceli bir bağ gelişir. Hikâye Rick ve Morty’nin çıktığı
              serüvenler üzerinden yol alır fakat bununla da sınırlı değildir.
            </text>
          </div>
          <div className="flex justify-between">
            <div className="">
              <div className="card w-96 bg-base-100  image-full">
                <figure>
                  <Image
                    src={imdb}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title"></h2>
                  <p></p>
                  <div className="card-actions">
                    <button
                      className="btn btn-outline"
                      onClick={() => {
                        window.open("https://www.imdb.com/title/tt2861424/");
                      }}
                    >
                      Daha fazla bilgi
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-96 bg-base-100  image-full">
                <figure>
                  <Image
                    src={netflix}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title"></h2>
                  <p></p>
                  <div className="card-actions">
                    <button
                      className="btn btn-outline"
                      onClick={() => {
                        window.open(
                          "https://www.netflix.com/tr/title/80014749"
                        );
                      }}
                    >
                      izle
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
