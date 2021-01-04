import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';
import { clearUpdateCacheExperimentalAsync } from 'expo/build/Updates/Updates';

export default function Quests() {
  const [quests, setQuests] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToDetail(quest) {
    navigation.navigate('Detail', { quest });
  }

  async function loadQuests() {
    if (loading) {
      return;
    }

    if (total > 0 && quests.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('quests', {
      params: { page }
    });

    setQuests([... quests, ... response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadQuests();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} Quests</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Quests</Text>
      <Text style={styles.description}>Busque por sua Quest!</Text>

      <FlatList 
        data={quests}
        style={styles.questList}
        keyExtractor={quest => String(quest.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadQuests}
        onEndReachedThreshold={0.2}
        renderItem={({ item: quest }) => (
          <View style={styles.quest}>
            <View style ={styles.typeClass}>
              <Text style={styles.questClass}>{quest.classification}</Text>
            </View>

            <Text style={styles.questProperty}>INSTITUIÇÃO:</Text>
            <Text style={styles.questValue}>{quest.college} / {quest.city} - {quest.uf}</Text>

            <Text style={styles.questProperty}>QUEST:</Text>
            <Text style={styles.questValue}>{quest.title}</Text>

            <Text style={styles.questProperty}>RECOMPENSA:</Text>
            <Text style={styles.questValue}>{quest.reward}</Text>

            <TouchableOpacity 
              style={styles.detailsButton} 
              onPress={() => navigateToDetail(quest)}
            >
              <Text style={styles.detailsButtonText}>Prosseguir</Text>
              <Feather name="arrow-right" size={16} color="#00D294" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
