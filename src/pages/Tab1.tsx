import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonAvatar, IonLabel, IonItemOptions, IonItemSliding, IonItemOption } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const arr = [
  {
    name: 'Hoang',
    desc: 'I love all things design!',
    pfp: "https://ca.slack-edge.com/T0171J44GNS-U0187P2F5T4-b1fd59458e4a-512"
  },
  {
    name: 'Priya',
    desc: 'Looking for a coding buddy :)',
    pfp: "https://ca.slack-edge.com/T0171J44GNS-U01817EKK6E-a04444b7a86c-512"
  },
  {
    name: 'Alex',
    desc: 'Hello :)',
    pfp: "https://ca.slack-edge.com/T0171J44GNS-U0183UWCZKM-gd3d946da65b-512"
  }
]

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>my matches</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {arr.map(elem => (
            <IonItemSliding key={elem.name}>
              <IonItem>
                <IonAvatar slot="start">
                <img src={elem.pfp} />
                </IonAvatar>
                <IonLabel>
                    <h2>{elem.name}</h2>
                    <h3>{elem.desc}</h3>
                </IonLabel>
                </IonItem>
                <IonItemOptions side="start">
                    <IonItemOption>
                      Remove
                    </IonItemOption>
                </IonItemOptions>
            </IonItemSliding>
          ))}

        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
