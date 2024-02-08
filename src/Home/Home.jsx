import React from 'react';
import style from './Home.module.css';

export default function Home() {
  return (
    <div className={style.color}>
      <section className={`${style.img} d-flex justify-content-between`}>
        <div className={` d-flex flex-column justify-content-left align-items-start`}>
          <h1 className='text-primary z-2 '>Less Waiting</h1>
          <h1>More Eating</h1>
        </div>
      </section>
    </div>
  );
}
