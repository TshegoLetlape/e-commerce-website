import "../sidebag.css";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

const SideBag = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const [itemCounts, setItemCounts] = useState({});

  return (
    <div className="side-bag  ">
      <h3>Bag</h3>
      <div className="item-images-container">
        {cartItems.map((item) => (
          <div className="item-image" key={item.id}>
            <img src={item.imageUrl} alt={item.productName} />
          </div>
        ))}
      </div>

      <p className="mt-4">
        <strong>Total: </strong>$
        {cartItems.reduce(
          (total, item) => total + item.price * (itemCounts[item.id] || 1),
          0
        )}
      </p>
      <Link to="/bag">
        <svg
          width="120"
          height="40"
          viewBox="0 0 159 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="159" height="40" rx="14" fill="#1A1F16" />
          <path
            d="M45.3117 15.9406C45.1727 15.8006 45.0073 15.6896 44.825 15.6139C44.6428 15.5383 44.4473 15.4996 44.25 15.5H41.25V14.75C41.25 13.3576 40.6969 12.0223 39.7123 11.0377C38.7277 10.0531 37.3924 9.5 36 9.5C34.6076 9.5 33.2723 10.0531 32.2877 11.0377C31.3031 12.0223 30.75 13.3576 30.75 14.75V15.5H27.75C27.3522 15.5 26.9706 15.658 26.6893 15.9393C26.408 16.2206 26.25 16.6022 26.25 17V27.125C26.25 28.9531 27.7969 30.5 29.625 30.5H42.375C43.2593 30.5003 44.1086 30.1545 44.7413 29.5367C45.0596 29.233 45.3132 28.8679 45.4865 28.4634C45.6599 28.059 45.7495 27.6236 45.75 27.1836V17C45.7506 16.8032 45.7122 16.6083 45.637 16.4264C45.5617 16.2446 45.4512 16.0795 45.3117 15.9406ZM32.25 14.75C32.25 13.7554 32.6451 12.8016 33.3483 12.0983C34.0516 11.3951 35.0054 11 36 11C36.9946 11 37.9484 11.3951 38.6517 12.0983C39.3549 12.8016 39.75 13.7554 39.75 14.75V15.5H32.25V14.75ZM41.25 19.25C41.25 20.6424 40.6969 21.9777 39.7123 22.9623C38.7277 23.9469 37.3924 24.5 36 24.5C34.6076 24.5 33.2723 23.9469 32.2877 22.9623C31.3031 21.9777 30.75 20.6424 30.75 19.25V18.5C30.75 18.3011 30.829 18.1103 30.9697 17.9697C31.1103 17.829 31.3011 17.75 31.5 17.75C31.6989 17.75 31.8897 17.829 32.0303 17.9697C32.171 18.1103 32.25 18.3011 32.25 18.5V19.25C32.25 20.2446 32.6451 21.1984 33.3483 21.9017C34.0516 22.6049 35.0054 23 36 23C36.9946 23 37.9484 22.6049 38.6517 21.9017C39.3549 21.1984 39.75 20.2446 39.75 19.25V18.5C39.75 18.3011 39.829 18.1103 39.9697 17.9697C40.1103 17.829 40.3011 17.75 40.5 17.75C40.6989 17.75 40.8897 17.829 41.0303 17.9697C41.171 18.1103 41.25 18.3011 41.25 18.5V19.25Z"
            fill="white"
          />
          <path
            d="M61.05 27L56.05 13H58.29L62.41 24.67H61.86L65.98 13H68.23L63.23 27H61.05ZM69.9439 27V17.12H72.0339V27H69.9439ZM69.9439 15.2V13H72.0339V15.2H69.9439ZM79.1766 27.2C77.9966 27.2 77.0099 26.9633 76.2166 26.49C75.4232 26.01 74.8232 25.3767 74.4166 24.59C74.0166 23.7967 73.8166 22.93 73.8166 21.99C73.8166 21.0767 74.0032 20.2367 74.3766 19.47C74.7566 18.7033 75.3066 18.09 76.0266 17.63C76.7532 17.1633 77.6299 16.93 78.6566 16.93C79.5299 16.93 80.2866 17.1067 80.9266 17.46C81.5666 17.8133 82.0566 18.3067 82.3966 18.94C82.7432 19.5733 82.9166 20.3133 82.9166 21.16C82.9166 21.3333 82.9066 21.5133 82.8866 21.7C82.8732 21.8867 82.8466 22.0833 82.8066 22.29H75.9766C76.0632 23.07 76.2699 23.69 76.5966 24.15C76.9232 24.6033 77.3299 24.9267 77.8166 25.12C78.3032 25.3133 78.8299 25.41 79.3966 25.41C79.9032 25.41 80.4032 25.3533 80.8966 25.24C81.3899 25.12 81.8532 24.95 82.2866 24.73L82.4766 26.44C82.0966 26.62 81.6299 26.7933 81.0766 26.96C80.5232 27.12 79.8899 27.2 79.1766 27.2ZM76.0966 20.86H80.7766C80.7766 20.4667 80.7032 20.11 80.5566 19.79C80.4099 19.4633 80.1766 19.2033 79.8566 19.01C79.5432 18.8167 79.1366 18.72 78.6366 18.72C77.9032 18.72 77.3332 18.9133 76.9266 19.3C76.5266 19.6867 76.2499 20.2067 76.0966 20.86ZM86.65 27L83.72 17.12H85.97L87.78 24.58L89.78 17.37H91.73L93.73 24.58L95.55 17.12H97.8L94.85 27H92.81L90.76 20.07L88.7 27H86.65ZM104.074 27V13H108.864C110.157 13 111.147 13.2867 111.834 13.86C112.527 14.4267 112.874 15.2733 112.874 16.4C112.874 17.2 112.697 17.8867 112.344 18.46C111.991 19.0333 111.461 19.4267 110.754 19.64L110.924 19.25C111.957 19.4433 112.744 19.8533 113.284 20.48C113.824 21.1067 114.094 21.95 114.094 23.01C114.094 24.25 113.694 25.2267 112.894 25.94C112.094 26.6467 110.994 27 109.594 27H104.074ZM106.254 25.04H109.344C110.084 25.04 110.674 24.87 111.114 24.53C111.561 24.1833 111.784 23.6267 111.784 22.86C111.784 22.0267 111.554 21.45 111.094 21.13C110.641 20.8033 110.057 20.64 109.344 20.64H106.254V25.04ZM106.254 18.68H108.564C109.217 18.68 109.731 18.55 110.104 18.29C110.484 18.0233 110.674 17.5333 110.674 16.82C110.674 16.1 110.484 15.61 110.104 15.35C109.731 15.0833 109.217 14.95 108.564 14.95H106.254V18.68ZM118.111 27.2C117.538 27.2 117.028 27.08 116.581 26.84C116.135 26.5933 115.781 26.2533 115.521 25.82C115.268 25.3867 115.141 24.8767 115.141 24.29C115.141 23.73 115.268 23.2533 115.521 22.86C115.775 22.46 116.111 22.1267 116.531 21.86C116.951 21.5933 117.411 21.3833 117.911 21.23C118.418 21.07 118.931 20.9533 119.451 20.88C119.971 20.8067 120.455 20.7667 120.901 20.76C120.895 19.98 120.728 19.4533 120.401 19.18C120.075 18.9 119.578 18.76 118.911 18.76C118.511 18.76 118.101 18.82 117.681 18.94C117.261 19.0533 116.788 19.27 116.261 19.59L116.021 17.89C116.501 17.5967 117.038 17.3633 117.631 17.19C118.225 17.0167 118.838 16.93 119.471 16.93C120.265 16.93 120.921 17.07 121.441 17.35C121.961 17.63 122.351 18.0933 122.611 18.74C122.871 19.3867 123.001 20.2533 123.001 21.34V23.64C123.001 24.12 123.021 24.4967 123.061 24.77C123.108 25.0367 123.205 25.2267 123.351 25.34C123.498 25.4533 123.721 25.51 124.021 25.51H124.261L124.001 27.2H123.541C123.048 27.2 122.648 27.1467 122.341 27.04C122.041 26.9333 121.798 26.7833 121.611 26.59C121.425 26.39 121.268 26.1533 121.141 25.88C120.788 26.28 120.348 26.6 119.821 26.84C119.301 27.08 118.731 27.2 118.111 27.2ZM118.751 25.56C119.125 25.56 119.508 25.4667 119.901 25.28C120.301 25.0933 120.638 24.8333 120.911 24.5V22.18C120.165 22.2133 119.521 22.3033 118.981 22.45C118.448 22.59 118.035 22.8033 117.741 23.09C117.455 23.3767 117.311 23.7433 117.311 24.19C117.311 24.67 117.438 25.02 117.691 25.24C117.945 25.4533 118.298 25.56 118.751 25.56ZM129.588 32.02C128.681 32.02 127.878 31.9067 127.178 31.68C126.478 31.4533 125.928 31.1233 125.528 30.69C125.134 30.2633 124.938 29.74 124.938 29.12C124.938 28.6 125.084 28.1467 125.378 27.76C125.671 27.38 126.081 27.06 126.608 26.8C126.314 26.64 126.084 26.45 125.918 26.23C125.758 26.0033 125.678 25.7533 125.678 25.48C125.678 25.1733 125.768 24.9 125.948 24.66C126.134 24.42 126.411 24.2233 126.778 24.07C126.244 23.7233 125.838 23.2633 125.558 22.69C125.278 22.1167 125.138 21.4867 125.138 20.8C125.138 20.0867 125.294 19.4367 125.608 18.85C125.928 18.2567 126.388 17.7867 126.988 17.44C127.594 17.0933 128.328 16.92 129.188 16.92C129.641 16.92 130.064 16.9833 130.458 17.11C130.858 17.23 131.218 17.4 131.538 17.62C131.798 17.4733 132.124 17.35 132.518 17.25C132.918 17.1433 133.361 17.09 133.848 17.09C133.914 17.09 133.978 17.09 134.038 17.09C134.098 17.09 134.158 17.09 134.218 17.09L134.018 18.44C133.911 18.44 133.804 18.44 133.698 18.44C133.591 18.44 133.484 18.44 133.378 18.44C133.311 18.44 133.188 18.4467 133.008 18.46C132.828 18.4733 132.654 18.4967 132.488 18.53C132.734 18.85 132.921 19.2033 133.048 19.59C133.174 19.9767 133.238 20.38 133.238 20.8C133.238 21.54 133.078 22.2067 132.758 22.8C132.444 23.3933 131.984 23.8667 131.378 24.22C130.778 24.5733 130.048 24.75 129.188 24.75C128.974 24.75 128.764 24.7367 128.558 24.71C128.358 24.6767 128.164 24.6367 127.978 24.59C127.738 24.67 127.618 24.8133 127.618 25.02C127.618 25.18 127.714 25.3133 127.908 25.42C128.101 25.52 128.408 25.6033 128.828 25.67L131.068 26C132.134 26.16 132.961 26.4667 133.548 26.92C134.141 27.3733 134.438 28.02 134.438 28.86C134.438 29.5333 134.241 30.1033 133.848 30.57C133.461 31.0433 132.904 31.4033 132.178 31.65C131.451 31.8967 130.588 32.02 129.588 32.02ZM129.728 30.3C130.614 30.3 131.291 30.1867 131.758 29.96C132.224 29.74 132.458 29.4067 132.458 28.96C132.458 28.5867 132.304 28.3033 131.998 28.11C131.691 27.9167 131.231 27.7667 130.618 27.66L128.078 27.26C127.731 27.4067 127.431 27.6033 127.178 27.85C126.931 28.1033 126.808 28.41 126.808 28.77C126.808 29.2967 127.068 29.6833 127.588 29.93C128.114 30.1767 128.828 30.3 129.728 30.3ZM129.188 23.14C129.881 23.14 130.404 22.9267 130.758 22.5C131.118 22.0667 131.298 21.5033 131.298 20.81C131.298 20.13 131.118 19.58 130.758 19.16C130.404 18.7333 129.881 18.52 129.188 18.52C128.494 18.52 127.968 18.7333 127.608 19.16C127.254 19.58 127.077 20.13 127.077 20.81C127.077 21.5033 127.254 22.0667 127.608 22.5C127.968 22.9267 128.494 23.14 129.188 23.14Z"
            fill="white"
          />
        </svg>
      </Link>
    </div>
  );
};

export default SideBag;
