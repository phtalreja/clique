import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonList, IonItem, IonAvatar, IonCol, IonRow } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const arr = [
  {
    name: 'Hoang',
    pfp: "https://ca.slack-edge.com/T0171J44GNS-U0187P2F5T4-b1fd59458e4a-512",
    gender: 'female',
    friend_gender: 'female',
    interest: 'coding',
    available: 'aug 8th @ 9AM-7PM'
  }
]

const Tab3: React.FC = () => {
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
    
                  <IonAvatar>
                    <img src="https://ca.slack-edge.com/T0171J44GNS-U0187P2F5T4-b1fd59458e4a-512" />
                  </IonAvatar>
                  <IonLabel>
                      <h2>Hoang</h2>
                  </IonLabel>
        
          <IonList>
              {arr.map(elem => (
                <>
                  <IonItem>
                    <IonLabel>
                        My gender is {elem.gender}
                    </IonLabel>
                  </IonItem>

                  <IonItem>
                    <IonLabel>
                        I'm looking for a friend that's preferably {elem.friend_gender}
                    </IonLabel>
                  </IonItem>

                  <IonItem>
                    <IonLabel>
                        I am interested in {elem.interest}
                    </IonLabel>
                  </IonItem>

                  <IonItem>
                    <IonLabel>
                        I'm available {elem.available}
                    </IonLabel>
                  </IonItem>

                </>
              
              ))}
          </IonList>
        </IonContent>
      </IonPage>
    </>
  );
  
};

export default Tab3;

