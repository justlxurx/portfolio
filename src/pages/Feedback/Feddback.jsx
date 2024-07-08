import MainForm from '../../components/MainForm/index';
import Comments from '../../components/Comments';
import styles from './styles.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const FAQ = () => {
  return (
    <>
      <Header />
      <div className={styles.mainFormSection}>
        <MainForm />
      </div>

      <Comments />
      <Footer />
    </>
  );
};

export default FAQ;
