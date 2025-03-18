import React from 'react';
import { Order } from '@component/types/types';
import styles from './order.card.module.scss';
import { SuccessIcon, FailedIcon } from '@component/assets/icons/icons';

interface OrderCardProps {
  order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <div className={styles.orderCard}>
      <div className={styles.orderCardRow}>
        <div className={styles.orderCardCol}>
            <span className={styles.orderCardTitle}>Transaction ID</span>
            <span className={styles.orderCardValue}>{order.id}</span>
        </div>
        <div className={styles.orderCardCol}>
            <span className={styles.orderCardTitle}>Date</span>
            <span className={styles.orderCardValue}>{order.date}</span>
        </div>
        <div className={styles.orderCardCol}>
            <span className={styles.orderCardTitle}>Status</span>
            <div className={styles.statusWrapper}>
                {order.status === 'Success' ? <SuccessIcon /> : <FailedIcon />}
                <span className={styles.orderCardValue}>{order.status}</span>
            </div>   
        </div>
      </div>
      <div className={styles.orderCardRow}>
        <div className={styles.orderCardCol}>
            <span className={styles.orderCardTitle}>Game name</span>
            <span className={styles.orderCardValue}>{order.gameName}</span>
        </div>
        <div className={styles.orderCardCol}>
            <span className={styles.orderCardTitle}>Game ID</span>
            <span className={styles.orderCardValue}>{order.gameId}</span>
        </div>
        <div className={styles.orderCardCol}>
            <span className={styles.orderCardTitle}>Amount</span>
            <span className={styles.orderCardValue}>{order.amount}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
