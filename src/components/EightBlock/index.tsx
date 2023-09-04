'use client'
import Image from 'next/image'
import styles from './styles.module.scss'
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import arrow_button from 'public/arrow_button.svg'

type BlockProps = {
  title: string;
  description: string;
  showInfo: boolean;
  onClick: () => void;
};

// const Block = ({ title, description }: { title: string, description: string }) => {
//     const [showInfo, setShowInfo] = useState(false);
//     const [bottomColor, setBottomColor] = useState(''); 
const Block = ({ title, description, showInfo, onClick }: BlockProps) => {
  const [bottomColor, setBottomColor] = useState('');


    const changeBottomColor = () => {
        const сolor = "#E97810";
        setBottomColor(сolor);
      };
  
    return (
      <div className={classNames(styles.scroll_blocks, { show: showInfo })}>
        <h3>{title}</h3>
        {showInfo ? (
          <div>
            <p>{description}</p>
          </div>
        ) : (
            <div>
          <button onClick={() => {onClick(); changeBottomColor();}} >
            Подробнее
            <Image src={arrow_button} alt="arrow" />
          </button>
          
           </div>
        )}<div className={styles.bottom_color} style={{ backgroundColor: bottomColor }}></div>
        </div>
    );
  };

const Blocks = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const [blockStates, setBlockStates] = useState<Array<boolean>>(Array(8).fill(false));
    const [bottomColor, setBottomColor] = useState('');
  
    const handleBlockClick = (index: number) => {
      const updatedBlockStates = blockStates.map((state, i) => (i === index ? !state : false));
      setBlockStates(updatedBlockStates);
      setBottomColor(updatedBlockStates[index] ? "#E97810" : ''); // Устанавливаем цвет в зависимости от состояния
    };

    return (
        
       <section className={styles.learn_program}>
            <div className={styles.learn_program_heading}>
                <div></div>
                <h1>программа обучения</h1>
                <div></div>
            </div>

            <div className={styles.learn_program_main}>
                <h2>8 блоков обучения</h2>
                <p>Интенсив захватывает основы языка <br /> программирования Java, работу <br />
                с различными инструментами <br />
                и библиотеками, а также непосредственно <br /> разработку веб-приложений</p>
                <div className={styles.learn_program_main_div}>
                    <div className={styles.learn_program_main_div_img}></div>
                    <div className={styles.learn_program_main_div_scroll} >

                    <Block
              title="Java Core"
              description="База, которая необходима для старта. На интенсиве изучаем основы программирования и на практике 
              работаем с Java Core: интеграции с другими технологиями, 
              многопоточные программировании, разработка приложений и др."
              showInfo={blockStates[0]}
              onClick={() => handleBlockClick(0)}
            />        
 
            <Block
              title="Java Spring"
              description="Описание для Java Spring."
              showInfo={blockStates[1]}
              onClick={() => handleBlockClick(1)}
            />

            <Block
              title="Elasticsearch"
              description="Описание для Elasticsearch."
              showInfo={blockStates[2]}
              onClick={() => handleBlockClick(2)}
            />

          <Block
              title="Spring Core & MVC"
              description="Описание для Java Spring."
              showInfo={blockStates[1]}
              onClick={() => handleBlockClick(1)}
            />

            <Block
              title="Spring REST API"
              description="Описание для Elasticsearch."
              showInfo={blockStates[2]}
              onClick={() => handleBlockClick(2)}
            />

            <Block
              title="Spring OpenAPI"
              description="Описание для Java Spring."
              showInfo={blockStates[1]}
              onClick={() => handleBlockClick(1)}
            />

            <Block
              title="JUnit Tests"
              description="Описание для Elasticsearch."
              showInfo={blockStates[2]}
              onClick={() => handleBlockClick(2)}
            />
             <Block
              title="Spring Data"
              description="Описание для Java Spring."
              showInfo={blockStates[1]}
              onClick={() => handleBlockClick(1)}
            />

            <Block
              title="Spring Security"
              description="Описание для Elasticsearch."
              showInfo={blockStates[2]}
              onClick={() => handleBlockClick(2)}
            />

                    </div>
                </div>
            </div>
       </section>
    )}


    export default Blocks 





    