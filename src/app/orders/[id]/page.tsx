import { orders } from '@component/utils/mockup';
import { notFound } from 'next/navigation';
import styles from '../orders.page.module.scss';
import { CloseIcon } from '@component/assets/icons/icons';
import OrderCard from '@component/components/OrderCard';
import Button from '@component/ui/Button';

const OrderDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params; // Ждем загрузки params
  const order = orders.find(order => order.id === parseInt(id));

  if (!order) {
    notFound();
  }

  return (
    <div className={styles.orderWrapper}>
      <header className={styles.orderHeader}>
        <div className={styles.headerButton}>
          <CloseIcon />
          <h1 className={styles.orderCaption}>{order.id}</h1>
        </div>
      </header>
      <div className={styles.orderContainer}>
        <OrderCard order={order} />
      </div>
      <div className={styles.middleBlock}>
        <h3 className={styles.goodsCaption}>Your Goods:</h3>
        <h3 className={styles.goodsValue}>1 - 279,99$</h3>
      </div>
      <div className={styles.infoCard}>
        <div className={styles.infoCardContent}>
          <div className={styles.infoCardRow}>
            <h5 className={styles.infoCardValue}>40,500</h5>
            <span className={styles.infoCardMarked}>+1,500</span>
          </div>
          <div className={styles.infoCardRow}>
            <h5 className={styles.infoCardValue}>279,99$</h5>
            <span className={styles.infoCardDiscount}>749.99$</span>
          </div>
        </div>
      </div>
      <Button>Ask?</Button>
    </div>
  );
};

export default OrderDetails;
