import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_block">
        <ul>
          <li className="footer_block_title">Информация</li>
          <li className="client_item">Подарочный сертификат</li>
          <li className="client_item">
            <a href="https://docs.google.com/document/d/1Y8ZaXi6Ydn7zLPClHKfHwCnzCjae1Vdc2ne_5A08XcM/edit">Политика Конфиденциальности</a>
          </li>
          <li>Обмен и возврат</li>
          <li>Правила оплаты</li>
        </ul>
      </div>
      <div className="footer_block">
        <ul>
          <li className="footer_block_title">Социальные сети</li>
          <li>
            <a href="https://www.instagram.com">Instagram</a>
          </li>
          <li>
            <a href="https://www.youtube.com">YouTube</a>
          </li>
          <li>
            <a href="https://web.telegram.org/a/">Telegram</a>
          </li>
          <li>
            <a href="https://www.tiktok.com/">TikTok</a>
          </li>
          <li>
            <a href="https://twitter.com/">Twitter</a>
          </li>
        </ul>
      </div>
      <div className="footer_block">
        <ul>
          <li className="footer_block_title">Контакты</li>
          <li>+7 (701) 807-18-67</li>
          <li>+7 (701) 807-16-47</li>
          <li>urbansneaker@gmail.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
