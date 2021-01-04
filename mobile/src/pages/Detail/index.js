import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const quest = route.params.quest;
  const message = `Olá Sensei ${quest.name}, estou entrando em contato pois gostaria de participar da Quest, "${quest.title}", estou ciente de que estou classificado, e preciso dessa recompensa.`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Capacitado para Quest: ${quest.title}`,
      recipients: [quest.email],
      body: message
    });
  }

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=${quest.whatsapp}&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#00D294" />
        </TouchableOpacity>
      </View>

      <View style={styles.quest}>
        <View style ={styles.typeClass}>
          <Text style={styles.questClass}>{quest.classification}</Text>
        </View>

        <Text style={styles.questProperty}>SENSEI:</Text>
        <Text style={styles.questValue}>{quest.name}</Text>

        <Text style={styles.questProperty}>CURSO / DISCIPLINA</Text>
        <Text style={styles.questValue}>{quest.course} / {quest.discipline}</Text>

        <Text style={styles.questProperty}>QUEST:</Text>
        <Text style={styles.questValue}>{quest.description}</Text>

        <Text style={styles.questProperty}>RECOMPENSA:</Text>
        <Text style={styles.questValue}>{quest.reward}</Text>

        <Text style={styles.questProperty}>Entre em Contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionWhatsApp} onPress={sendWhatsApp}>
            <Text style={styles.actionWhatsAppText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionEmail} onPress={sendMail}>
            <Text style={styles.actionEmailText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
