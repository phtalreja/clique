import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonList, IonItem, IonAvatar, IonCol, IonRow, IonModal, IonButton, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { chevronForwardOutline, arrowBackOutline } from 'ionicons/icons';
const arr = [
  {
    name: 'Hoang',
    pfp: "https://ca.slack-edge.com/T0171J44GNS-U0187P2F5T4-b1fd59458e4a-512",
    gender: 'female',
    friend_gender: 'female',
    interest: 'coding',
    available: 'aug 8th @ 9am-7pm'
  }
]
const Tab3: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    
      <IonPage>
        
        <IonHeader>
          <IonToolbar>
            <IonTitle>settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {arr.map(elem => (
                
                  <div>
                  <IonAvatar className="avatar">
                    <img src={elem.pfp} />
                  </IonAvatar>
                  <IonLabel>
                      <h1 className="ion-text-center ion-padding">{elem.name}</h1>
                  </IonLabel>


          <IonList className="ion-padding">
              
                  <IonItem>
                    <IonLabel>
                        My gender is {elem.gender}
                    </IonLabel>
                    <IonButton color="clear" onClick={() => setShowModal(true)}>
                      <IonIcon icon={chevronForwardOutline} />
                    </IonButton>
                  </IonItem>
                  <IonItem>
                    <IonLabel>
                        I'm looking for a friend that's preferably {elem.friend_gender}
                    </IonLabel>
                    <IonButton color="clear" onClick={() => setShowModal(true)}>
                      <IonIcon icon={chevronForwardOutline} />
                    </IonButton>
                  </IonItem>
                  <IonItem>
                    <IonLabel>
                        I am interested in {elem.interest}
                    </IonLabel>
                    <IonButton color="clear" onClick={() => setShowModal(true)}>
                      <IonIcon icon={chevronForwardOutline} />
                    </IonButton>
                  </IonItem>
                  <IonItem>
                    <IonLabel>
                        I'm available {elem.available}
                    </IonLabel>
                    <IonButton color="clear" onClick={() => setShowModal(true)}>
                      <IonIcon icon={chevronForwardOutline} />
                    </IonButton>
                  </IonItem>
                  
                  </IonList>
                  </div>
              ))}
          
          
          
            <IonModal isOpen={showModal} cssClass='my-custom-class'>
                <IonHeader>
                  <IonToolbar>
                    <IonTitle>settings</IonTitle>
                      <IonButton color="clear" onClick={() => setShowModal(false)}>
                        <IonIcon icon={arrowBackOutline} />
                    </IonButton>
                  </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding">
                <h3 className="ion-text-center">
                  I identify as ...
                </h3>
                <IonButton expand="block" fill="outline">female</IonButton>
                <IonButton expand="block" fill="outline">male</IonButton>
                <IonButton expand="block" fill="outline">other/nonbinary</IonButton>
                <IonButton expand="block" fill="outline">prefer not to say</IonButton>
              </IonContent>
              <IonButton expand="block">change</IonButton>
          </IonModal>

          <IonModal isOpen={showModal} cssClass='my-custom-class'>
                <IonHeader>
                  <IonToolbar>
                    <IonTitle>settings</IonTitle>
                      <IonButton color="clear" onClick={() => setShowModal(false)}>
                        <IonIcon icon={arrowBackOutline} />
                    </IonButton>
                  </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding">
                <h3 className="ion-text-center">
                  I'm looking for a friend that's preferably ...
                </h3>
                <IonButton expand="block" fill="outline">female</IonButton>
                <IonButton expand="block" fill="outline">male</IonButton>
                <IonButton expand="block" fill="outline">other/nonbinary</IonButton>
                <IonButton expand="block" fill="outline">no preference</IonButton>
              </IonContent>
              <IonButton expand="block">change</IonButton>
          </IonModal>

          <IonModal isOpen={showModal} cssClass='my-custom-class'>
                <IonHeader>
                  <IonToolbar>
                    <IonTitle>settings</IonTitle>
                      <IonButton color="clear" onClick={() => setShowModal(false)}>
                        <IonIcon icon={arrowBackOutline} />
                    </IonButton>
                  </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding">
                <h3 className="ion-text-center">
                  the activity I'm interested in is ...
                </h3>
                <IonButton expand="block" fill="outline">coding</IonButton>
                <IonButton expand="block" fill="outline">cooking</IonButton>
                <IonButton expand="block" fill="outline">exercising</IonButton>
                <IonButton expand="block" fill="outline">netflix n' chill</IonButton>
              </IonContent>
              <IonButton expand="block">change</IonButton>
          </IonModal>

          <IonModal isOpen={showModal} cssClass='my-custom-class'>
                <IonHeader>
                  <IonToolbar>
                    <IonTitle>settings</IonTitle>
                      <IonButton color="clear" onClick={() => setShowModal(false)}>
                        <IonIcon icon={arrowBackOutline} />
                    </IonButton>
                  </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding">
                <h3 className="ion-text-center">
                  I'm free to meet up on ...
                </h3>
                
              </IonContent>
              <IonButton expand="block">change</IonButton>
          </IonModal>



        </IonContent>
      </IonPage>
      
  );
  
};
export default Tab3;