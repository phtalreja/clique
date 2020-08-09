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
  useIonViewDidEnter,
} from "@ionic/react";
import "./Onboarding.css";

const Onboarding: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="onboardingContainer">
          <div className="onboardingContent">
            <div className="ion-text-center">
              <h1 className="title">clique</h1>
              <h2 className="description">let's find yours</h2>
            </div>

            <img className="center" src="../assets/humaaans.png" />
            <IonButton shape="round" color="light" className="continue google">
              continue with google
            </IonButton>
            <br />
            <IonButton shape="round" color="warning" className="continue edu">
              continue with .edu email
            </IonButton>
            <p id="disclaimer">
              by signing up, you agree to our terms of service and privacy
              policy.
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Onboarding;
