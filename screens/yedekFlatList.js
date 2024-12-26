{/* guessRounds.map(guessRound => <Text key={guessRound}  >{guessRound} </Text>)*/}
<FlatList 
data = {guessRounds} 
renderItem = {(itemData) => 
    (<GuessLogItem 
        roundNumber={guessRoundListLength - itemData.index}
        guess={itemData.item} />)} //roundNumber değerini itemData.index ile sırası ile oluştuurlan index numarasından çekiyoruz.
keyExtractor={(item) => item} // keyExtractor propsu, her bir elemanın benzersiz bir key'e sahip olmasını sağlar. burdaki datamızda key değeri olmadığı için direkt item'ı key olarak atadık. Çünkü her bir item değeri benzersiz.
/> ;{/* itemData react-native tarafından otomatik olarak sağlanan FlatList propsudur , itemData.item.value' de bir react-native propsudur .uygulamada item direkt sayı değeri olduğu için value değerini yazmasakta olur.*/}