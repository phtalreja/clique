import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonList,
  IonItem,
  IonAvatar,
  IonCol,
  IonRow,
  IonModal,
  IonButton,
  IonIcon,
  IonSlides,
  IonSlide,
  IonInput,
  IonItemDivider,
  IonDatetime,
} from "@ionic/react";
import "./Onboarding.css";

const Onboarding: React.FC = () => {
  const [showSlides, setShowSlides] = useState(false);

  const handleEduLogin = () => {
    setShowSlides(true);
  };
  return (
    <IonPage>
      <IonContent>
        {!showSlides && <Landing onEduLogin={handleEduLogin}></Landing>}
        {showSlides && <OnboardingSlides></OnboardingSlides>}
      </IonContent>
    </IonPage>
  );
};

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

export interface Props {
  onEduLogin: () => void;
}
const Landing: React.FC<Props> = ({ onEduLogin }) => {
  return (
    <div className="onboardingContainer">
      <div className="onboardingContent">
        <div className="ion-text-center">
          <h1 className="title">clique</h1>
          <h2 className="description">let's find yours</h2>
        </div>

        <img className="center" src="../assets/humaaans.png" />
        {/* <IonButton shape="round" color="light" className="continue google">
          continue with google
        </IonButton> */}
        <br />
        <IonButton
          shape="round"
          color="warning"
          className="continue edu"
          onClick={onEduLogin}
        >
          continue with .edu email
        </IonButton>
        <p id="disclaimer">
          by signing up, you agree to our terms of service and privacy policy.
        </p>
      </div>
    </div>
  );
};
const OnboardingSlides: React.FC = () => {
  return (
    <IonSlides pager={true} options={slideOpts}>
      <EmailSlide></EmailSlide>
      <DetailsSlide></DetailsSlide>
      <PrefSlide></PrefSlide>
      <ActivitySlide></ActivitySlide>
      <AvailabilitySlide></AvailabilitySlide>
      <FinalSlide></FinalSlide>
    </IonSlides>
  );
};

const EmailSlide: React.FC = () => {
  const [text, setText] = useState<string>();
  return (
    <IonSlide>
      <div className="slide-content">
        <h1 className="header">sign up with your email</h1>
        <IonItem>
          <IonInput
            value={text}
            className="rounded-input"
            placeholder="Enter Input"
            onIonChange={(e) => setText(e.detail.value!)}
            clearInput
          ></IonInput>
        </IonItem>
        <div className="ion-padding">
          <IonButton shape="round" color="primary" className="continue">
            continue
          </IonButton>
        </div>
      </div>
    </IonSlide>
  );
};

const DetailsSlide: React.FC = () => {
  const [text, setText] = useState<string>();
  return (
    <IonSlide>
      <div className="slide-content">
        <h1 className="header">tell us more about you</h1>
        <h5 className="sub-header">
          fill out the details so we can match you up with the perfect friend.
        </h5>
        <p className="sub-header ion-text-left">my name is...</p>
        <IonItem>
          <IonInput
            value={text}
            className="rounded-input"
            placeholder="enter first name"
            onIonChange={(e) => setText(e.detail.value!)}
            clearInput
          ></IonInput>
        </IonItem>
        <p className="sub-header ion-padding-top ion-text-left">
          i identify as a...
        </p>
        <IonButton expand="block" fill="outline">
          female
        </IonButton>
        <IonButton expand="block" fill="outline">
          male
        </IonButton>
        <IonButton expand="block" fill="outline">
          other/nonbinary
        </IonButton>
        <IonButton expand="block" fill="outline">
          no preference
        </IonButton>
        <div className="ion-padding">
          <IonButton
            shape="round"
            color="primary"
            className="continue button-bottom"
          >
            continue
          </IonButton>
        </div>
      </div>
    </IonSlide>
  );
};

const PrefSlide: React.FC = () => {
  const [text, setText] = useState<string>();
  return (
    <IonSlide>
      <div className="slide-content">
        <h1 className="header">
          i'm looking for a friend that is preferably...
        </h1>
        <h5 className="sub-header ion-margin-bottom">
          please select one choice.
        </h5>
        <IonButton expand="block" fill="outline">
          female
        </IonButton>
        <IonButton expand="block" fill="outline">
          male
        </IonButton>
        <IonButton expand="block" fill="outline">
          other/nonbinary
        </IonButton>
        <IonButton expand="block" fill="outline">
          no preference
        </IonButton>
        <div className="ion-padding">
          <IonButton
            shape="round"
            color="primary"
            className="continue button-bottom"
          >
            continue
          </IonButton>
        </div>
      </div>
    </IonSlide>
  );
};

const ActivitySlide: React.FC = () => {
  const [text, setText] = useState<string>();
  return (
    <IonSlide>
      <div className="slide-content">
        <h1 className="header">
          which activity would you like to do with a friend?
        </h1>
        <h5 className="sub-header ion-margin-bottom">
          don’t worry - this is all virtual so we will all be social distancing
          😉
        </h5>
        <IonButton expand="block" fill="outline">
          coding
        </IonButton>
        <IonButton expand="block" fill="outline">
          cooking
        </IonButton>
        <IonButton expand="block" fill="outline">
          exercising
        </IonButton>
        <IonButton expand="block" fill="outline">
          netflix n' chill
        </IonButton>
        <div className="ion-padding">
          <IonButton
            shape="round"
            color="primary"
            className="continue button-bottom"
          >
            continue
          </IonButton>
        </div>
      </div>
    </IonSlide>
  );
};

const AvailabilitySlide: React.FC = () => {
  const [text, setText] = useState<string>();
  const [selectedDate, setSelectedDate] = useState<string>(
    "2020-08-15T09:00:20.789"
  );
  return (
    <IonSlide>
      <div className="slide-content">
        <h1 className="header">
          when are you free to code with your new friend?
        </h1>
        <IonItem>
          <IonLabel>date</IonLabel>
          <IonDatetime
            displayFormat="MM DD YY"
            placeholder="Select Date"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>start time</IonLabel>
          <IonDatetime
            displayFormat="h:mm a"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>end time</IonLabel>
          <IonDatetime
            displayFormat="h:mm a"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>
        <div className="ion-padding">
          <IonButton
            shape="round"
            color="primary"
            className="continue button-bottom"
          >
            continue
          </IonButton>
        </div>
      </div>
    </IonSlide>
  );
};

const FinalSlide: React.FC = () => {
  const [text, setText] = useState<string>();
  return (
    <IonSlide>
      <div className="slide-content">
        <img className="center" src="../assets/humans2.png" />
        <h1 className="header">you're all set!</h1>
        <h5 className="sub-header">
          we are here to connect like-minded individuals to empower each other.
          anything is possible when you have the right people to support you.
          you will receive a notification once you are matched up with your
          clique.
        </h5>

        <h5 className="sub-header">
          please remember to treat others the way you want to be treated. be
          kind and respectful and have fun! 😊
        </h5>
        <div className="ion-padding">
          <IonButton
            shape="round"
            color="primary"
            className="continue button-bottom"
          >
            got it!
          </IonButton>
        </div>
      </div>
    </IonSlide>
  );
};

export default Onboarding;
