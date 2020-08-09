import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonList, IonItem, IonAvatar, IonCol, IonRow, IonModal, IonButton, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { chevronForwardOutline } from 'ionicons/icons';

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
        <IonContent className="ion-padding">
    
                  <IonAvatar className="avatar">
                    <img src="https://ca.slack-edge.com/T0171J44GNS-U0187P2F5T4-b1fd59458e4a-512" />
                  </IonAvatar>
                  <IonLabel>
                      <h1 className="ion-text-center ion-padding">Hoang</h1>
                  </IonLabel>
        
          <IonList className="ion-padding">
              {arr.map(elem => (
                <>
                  <IonItem>
                    <IonLabel>
                        My gender is {elem.gender}
                    </IonLabel>
                    <IonButton color="clear">
                      <IonIcon icon={chevronForwardOutline} />
                    </IonButton>
                  </IonItem>

                  <IonItem>
                    <IonLabel>
                        I'm looking for a friend that's preferably {elem.friend_gender}
                    </IonLabel>
                    <IonButton color="clear">
                      <IonIcon icon={chevronForwardOutline} />
                    </IonButton>
                  </IonItem>

                  <IonItem>
                    <IonLabel>
                        I am interested in {elem.interest}
                    </IonLabel>
                    <IonButton color="clear">
                      <IonIcon icon={chevronForwardOutline} />
                    </IonButton>
                  </IonItem>

                  <IonItem>
                    <IonLabel>
                        I'm available {elem.available}
                    </IonLabel>
                    <IonButton color="clear">
                      <IonIcon icon={chevronForwardOutline} />
                    </IonButton>
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

export const ModalExample: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonContent>
      <IonLabel>Helloooo</IonLabel>
      <IonModal isOpen={showModal} cssClass='my-custom-class'>
        <p>This is modal content</p>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
    </IonContent>
  );
};

