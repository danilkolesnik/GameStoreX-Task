'use client';
import { useRouter } from "next/navigation";
import OrderCard from "@component/components/OrderCard";
import styles from './orders.page.module.scss';
import { ArrowBack } from "@component/assets/icons/icons";
import { orders } from "@component/utils/mockup";

export default function Orders() {
    const router = useRouter();

    const handleRedirect = () => {
        router.push('/auth');
    };

    return (
        <div className={styles.orderWrapper}>
            <header className={styles.orderHeader}>
                <div className={styles.headerButton} onClick={() => handleRedirect()}>
                    <ArrowBack/>
                    <h1 className={styles.orderCaption}>Orders</h1>
                </div>
            </header>
            <div className={styles.orderContainer}>
                {(orders || []).map((order) => (
                    <div key={order.id} onClick={() => router.push(`/orders/${order.id}`)}>
                        <OrderCard order={order}/>
                    </div>
                ))}
            </div>
        </div>
    );
};