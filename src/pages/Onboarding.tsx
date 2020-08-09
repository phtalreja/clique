import React, { useState, useRef } from "react";
import { Redirect } from "react-router-dom";
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
import Firebase from "../config/Firebase";
import { start } from "repl";

export interface OnboardingInterface {
  user: string;
  setUser: (user: string) => void;
}
const Onboarding: React.FC<OnboardingInterface> = ({ user, setUser }) => {
  /** Whether we should show the onboarding slides.  */
  const [showSlides, setShowSlides] = useState(false);

  /** If user presses the button to log in with a .edu email.  */
  const handleEduLogin = () => {
    setShowSlides(true);
  };

  return (
    <IonPage>
      <IonContent>
        {!showSlides && (
          <Landing user={user} onEduLogin={handleEduLogin}></Landing>
        )}
        {showSlides && (
          <OnboardingSlides
            email={user}
            setEmail={setUser}
            setShowSlides={setShowSlides}
          ></OnboardingSlides>
        )}
      </IonContent>
    </IonPage>
  );
};

/** Slide options for IonSlides.  */
const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

export interface LandingProps {
  user: string;
  onEduLogin: () => void;
}

/** First landing page with options to log in. Has "clique" and cool humans pic.  */
const Landing: React.FC<LandingProps> = ({ user, onEduLogin }) => {
  if (user) {
    return <Redirect to="/tab1" />;
  }

  return (
    <div className="onboardingContainer">
      <div className="onboardingContent">
        <div className="ion-text-center">
          <h1 className="title">clique</h1>
          <h2 className="description">let's find yours.</h2>
        </div>

        <img className="center" src="../assets/humaaans.png" />
        <IonButton shape="round" color="light" className="continue google">
          continue with google
        </IonButton>
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

export interface OnboardingProps {
  email: string;
  setEmail: (email: string) => void;
  setShowSlides: (showSlides: boolean) => void;
}

const OnboardingSlides: React.FC<OnboardingProps> = ({
  email,
  setEmail,
  setShowSlides,
}) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [preference, setPreference] = useState("");
  const [activity, setActivity] = useState("");
  const [startDate, setStartDate] = useState<string>("2020-08-15T09:00:20.789");
  const [endDate, setEndDate] = useState<string>("2020-08-15T012:00:20.789");

  const slides = useRef(document.createElement("ion-slides"));

  const handleFinish = () => {
    console.log("done!");
    setShowSlides(false);
    console.log(name, gender, preference, activity, startDate, endDate);
    signup();
    addUser();
  };

  // const login = (e: Event) => {
  const login = () => {
    console.log("HELLO");
    Firebase.auth()
      .signInWithEmailAndPassword("test@example.edu", "123456")
      .then((u) => {
        console.log("Login successful");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  };

  /** Sign up to Firebase auth */
  const signup = () => {
    Firebase.auth()
      .createUserWithEmailAndPassword(email, "123456")
      .then((u) => {})
      .then((u) => {
        console.log("Successfully created user!");
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
        console.log(error);
      });
  };

  /** Store user details */

  const addUser = () => {
    let userDB = Firebase.firestore().collection("users");
    userDB
      .doc(email)
      .set({
        name: name,
        email: email,
        gender: gender,
        preference: preference,
        activity: activity,
        startDate: startDate,
        endDate: endDate,
      })
      .then(function () {
        console.log("User successfully stored.");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  const nextSlide = () => {
    slides.current.slideNext();
  };

  return (
    <IonSlides pager={true} options={slideOpts} ref={slides}>
      <EmailSlide
        email={email}
        setEmail={setEmail}
        nextSlide={nextSlide}
      ></EmailSlide>
      <DetailsSlide
        name={name}
        setName={setName}
        setGender={setGender}
        nextSlide={nextSlide}
      ></DetailsSlide>
      <PrefSlide
        setPreference={setPreference}
        nextSlide={nextSlide}
      ></PrefSlide>
      <ActivitySlide
        setActivity={setActivity}
        nextSlide={nextSlide}
      ></ActivitySlide>
      <AvailabilitySlide
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        nextSlide={nextSlide}
      ></AvailabilitySlide>
      <FinalSlide onFinish={handleFinish}></FinalSlide>
    </IonSlides>
  );
};

export interface EmailSlideProps {
  email: string;
  setEmail: (email: string) => void;
  nextSlide: () => void;
}

const EmailSlide: React.FC<EmailSlideProps> = ({
  email,
  setEmail,
  nextSlide,
}) => {
  return (
    <IonSlide>
      <div className="slide-content">
        <h1 className="header">sign up with your email</h1>
        <IonItem>
          <IonInput
            value={email}
            className="rounded-input"
            placeholder="Enter Input"
            onIonChange={(e) => setEmail(e.detail.value!)}
            clearInput
          ></IonInput>
        </IonItem>
        <div className="ion-padding">
          <IonButton
            shape="round"
            color="primary"
            className="continue"
            onClick={() => nextSlide()}
          >
            continue
          </IonButton>
        </div>
      </div>
    </IonSlide>
  );
};

export interface DetailsSlideInterface {
  name: string;
  setName: (name: string) => void;
  setGender: (gender: string) => void;
  nextSlide: () => void;
}

const DetailsSlide: React.FC<DetailsSlideInterface> = ({
  name,
  setName,
  setGender,
  nextSlide,
}) => {
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
            value={name}
            className="rounded-input"
            placeholder="enter first name"
            onIonChange={(e) => setName(e.detail.value!)}
            clearInput
          ></IonInput>
        </IonItem>
        <p className="sub-header ion-padding-top ion-text-left">
          i identify as a...
        </p>
        <IonButton
          expand="block"
          fill="outline"
          onClick={(e) => setGender("female")}
        >
          female
        </IonButton>
        <IonButton
          expand="block"
          fill="outline"
          onClick={(e) => setGender("male")}
        >
          male
        </IonButton>
        <IonButton
          expand="block"
          fill="outline"
          onClick={(e) => setGender("other/non-binary")}
        >
          other/nonbinary
        </IonButton>
        <IonButton
          expand="block"
          fill="outline"
          onClick={(e) => setGender("no preference")}
        >
          no preference
        </IonButton>
        <div className="ion-padding">
          <IonButton
            shape="round"
            color="primary"
            className="continue button-bottom"
            onClick={() => nextSlide()}
          >
            continue
          </IonButton>
        </div>
      </div>
    </IonSlide>
  );
};

export interface PrefSlideInterface {
  setPreference: (preference: string) => void;
  nextSlide: () => void;
}
const PrefSlide: React.FC<PrefSlideInterface> = ({
  setPreference,
  nextSlide,
}) => {
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
        <IonButton
          expand="block"
          fill="outline"
          onClick={() => setPreference("female")}
        >
          female
        </IonButton>
        <IonButton
          expand="block"
          fill="outline"
          onClick={() => setPreference("male")}
        >
          male
        </IonButton>
        <IonButton
          expand="block"
          fill="outline"
          onClick={() => setPreference("other/non-binary")}
        >
          other/nonbinary
        </IonButton>
        <IonButton
          expand="block"
          fill="outline"
          onClick={() => setPreference("no preference")}
        >
          no preference
        </IonButton>
        <div className="ion-padding">
          <IonButton
            shape="round"
            color="primary"
            className="continue button-bottom"
            onClick={() => nextSlide()}
          >
            continue
          </IonButton>
        </div>
      </div>
    </IonSlide>
  );
};

export interface ActivitySlideInterface {
  setActivity: (activity: string) => void;
  nextSlide: () => void;
}
const ActivitySlide: React.FC<ActivitySlideInterface> = ({
  setActivity,
  nextSlide,
}) => {
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
        <IonButton
          expand="block"
          fill="outline"
          onClick={() => setActivity("coding")}
        >
          coding
        </IonButton>
        <IonButton
          expand="block"
          fill="outline"
          onClick={() => setActivity("cooking")}
        >
          cooking
        </IonButton>
        <IonButton
          expand="block"
          fill="outline"
          onClick={() => setActivity("exercising")}
        >
          exercising
        </IonButton>
        <IonButton
          expand="block"
          fill="outline"
          onClick={() => setActivity("netflix n' chill")}
        >
          netflix n' chill
        </IonButton>
        <div className="ion-padding">
          <IonButton
            shape="round"
            color="primary"
            className="continue button-bottom"
            onClick={nextSlide}
          >
            continue
          </IonButton>
        </div>
      </div>
    </IonSlide>
  );
};

export interface AvailabilitySlideInterface {
  startDate: string;
  setStartDate: (startDate: string) => void;
  endDate: string;
  setEndDate: (endDate: string) => void;
  nextSlide: () => void;
}

const AvailabilitySlide: React.FC<AvailabilitySlideInterface> = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  nextSlide,
}) => {
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
            value={startDate}
            onIonChange={(e) => setStartDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>start time</IonLabel>
          <IonDatetime
            displayFormat="h:mm a"
            value={startDate}
            onIonChange={(e) => setStartDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>end time</IonLabel>
          <IonDatetime
            displayFormat="h:mm a"
            value={endDate}
            onIonChange={(e) => setEndDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>
        <div className="ion-padding">
          <IonButton
            shape="round"
            color="primary"
            className="continue button-bottom"
            onClick={nextSlide}
          >
            continue
          </IonButton>
        </div>
      </div>
    </IonSlide>
  );
};

export interface FinalSlideInterface {
  onFinish: () => void;
}
const FinalSlide: React.FC<FinalSlideInterface> = ({ onFinish }) => {
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
            onClick={onFinish}
          >
            got it!
          </IonButton>
        </div>
      </div>
    </IonSlide>
  );
};

export default Onboarding;
