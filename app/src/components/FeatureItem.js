import "../styles/featureItem.scss";
import iconchat from "../designs/img/icon-chat.png";
import iconmoney from "../designs/img/icon-money.png";
import iconsecurity from "../designs/img/icon-security.png";

const content = {
  priority: {
    img: iconchat,
    h3: "You are our #1 priority",
    text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  money: {
    img: iconmoney,
    h3: "More savings means higher rates",
    text: "The more you save with us, the higher your interest rate will be!",
  },
  security: {
    img: iconsecurity,
    h3: "Security you can trust",
    text: "We use top of the line encryption to make sure your data and money is always safe.",
  },
};

function FeatureItem(props) {
  return (
    <div className="feature-item">
      <img
        src={content[props.topic].img}
        alt="Chat Icon"
        className="feature-icon"
      />
      <h3 className="feature-item-title">{content[props.topic].h3}</h3>
      <p>{content[props.topic].text}</p>
    </div>
  );
}

export default FeatureItem;
