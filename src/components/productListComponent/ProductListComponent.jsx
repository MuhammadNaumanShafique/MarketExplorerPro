import {FlatList, RefreshControl} from 'react-native';
import EmptyListView from '../emptyListView/EmptyListView';
import {styles} from './ProductListComponent.style';

export default function ProductListComponent(props) {
  const {data, renderItem, loadMore, loading, refreshData} = props;

  return (
    <FlatList
      data={data}
      keyExtractor={item => item?.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListEmptyComponent={<EmptyListView />}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={refreshData}
          colors={['#2ecc71']}
          progressBackgroundColor="#fff"
        />
      }
    />
  );
}
