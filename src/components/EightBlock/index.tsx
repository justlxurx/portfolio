'use client'
import Image from 'next/image'
import styles from './styles.module.scss'
import React, { useState, useEffect, useRef, RefObject } from 'react';
import classNames from 'classnames';
import arrow_button from 'public/arrow_button.svg'


function isInViewport(elementRef: RefObject<HTMLElement>): boolean {
  if (!elementRef || !elementRef.current) {
    return false;
  }

  const element = elementRef.current;
  const rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

type BlockProps = {
  title: string;
  description: string;
  showInfo: boolean;
  onClick: () => void;
  className?: string; 
  
};

const Block = ({ title, description, showInfo, onClick, className }: BlockProps) => {
   
  
    return (
      <div className={classNames(styles.scroll_blocks, { show: showInfo })} >
        <h3>{title}</h3>
        {showInfo ? (
          <div>
            <p>{description}</p>
          </div>
        ) : (
            <div>
          <button onClick={() => {onClick()}} >
            Подробнее
            <Image src={arrow_button} alt="arrow" />
          </button>
          
           </div>
        )}<div className={styles.bottom_color} ></div>
        </div>
    );
  };




const Blocks = () => {
  const [blockStates, setBlockStates] = useState<Array<boolean>>(Array(9).fill(false));
  const blockRef = useRef(null);
 // const [isInView, setIsInView] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleBlockCount, setVisibleBlockCount] = useState<number>(0);

   const [isScrollingDown, setIsScrollingDown] = useState(false);

  


  useEffect(() => {
    const handleScroll = () => {
    //  setIsInView(isInViewport(blockRef));
      setIsVisible(isInViewport(blockRef));
    };

     if (isVisible) {
      // Отключаем скроллинг страницы, когда блок виден
      document.body.style.overflow = 'hidden';
    } else {
      // Восстанавливаем обычный скроллинг, когда блок не виден
      document.body.style.overflow = 'auto';
    }

    // Добавляем обработчик события прокрутки
    window.addEventListener("scroll", handleScroll);

    // Проверяем при загрузке страницы
    handleScroll();

    // Убираем обработчик события при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);


  
    
   
   
   
   
   const handleBlockClick = (index: number) => {
      const updatedBlockStates = blockStates.map((state, i) => (i === index ? !state : false));
      setBlockStates(updatedBlockStates);
    };

    return (      
       <div>
       <section className={styles.learn_program} >
            <div className={styles.learn_program__heading}>
                <div></div>
                <h1>программа обучения</h1>
                <div></div>
            </div>

            <div className={styles.learn_program__main} ref={blockRef}>
                <h2>8 блоков обучения</h2>
                <p>Интенсив захватывает основы языка <br /> программирования Java, работу <br />
                с различными инструментами <br />
                и библиотеками, а также непосредственно <br /> разработку веб-приложений</p>
                <div className={styles.bottom_section}>
                    <div className={styles.bottom_section__figure}></div>
                    <div className={styles.bottom_section__scrolling} >

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
              showInfo={blockStates[3]}
              onClick={() => handleBlockClick(3)}
            />

            <Block
              title="Spring REST API"
              description="Описание для Elasticsearch."
              showInfo={blockStates[4]}
              onClick={() => handleBlockClick(4)}
            />

            <Block
              title="Spring OpenAPI"
              description="Описание для Java Spring."
              showInfo={blockStates[5]}
              onClick={() => handleBlockClick(5)}
            />

            <Block
              title="JUnit Tests"
              description="Описание для Elasticsearch."
              showInfo={blockStates[6]}
              onClick={() => handleBlockClick(6)}
            />
             <Block
              title="Spring Data"
              description="Описание для Java Spring."
              showInfo={blockStates[7]}
              onClick={() => handleBlockClick(7)}
            />

            <Block
              title="Spring Security"
              description="Описание для Elasticsearch."
              showInfo={blockStates[8]}
              onClick={() => handleBlockClick(8)}
              className={styles.last_block}
              
            />
                  </div>
                </div>
            </div>
           
       </section> 
      </div>  
    )
  
  }


    export default Blocks 



