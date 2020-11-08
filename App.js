import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Animated,
  Dimensions 
} from 'react-native';

/* HEADER_MAX_HEIGHT = 120;
HEADER_MIN_HEIGHT = 70;
PROFILE_IMAGE_MAX_HEIGHT = 80;
PROFILE_IMAGE_MIN_HEIGHT = 40; */


/* const App = () => {
  
  let scrollY = new Animated.Value(0)
  
    const headerHeight = scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    });
    const profileImageHeight = scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
      extrapolate: 'clamp'
    });

    const profileImageMarginTop = scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [
        HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
        HEADER_MAX_HEIGHT + 5
      ],
      extrapolate: 'clamp'
    });
    const headerZindex = scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, 120],
      outputRange: [0, 0, 1000],
      extrapolate: 'clamp'
    });

    const headerTitleBottom = scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
        HEADER_MAX_HEIGHT -
          HEADER_MIN_HEIGHT +
          5 +
          PROFILE_IMAGE_MIN_HEIGHT +
          26
      ],
      outputRange: [-20, -20, -20, 0],
      extrapolate: 'clamp'
    });

    return (
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: 'lightskyblue',
            height: headerHeight,
            zIndex: headerZindex,
            elevation: headerZindex, //required for android
            alignItems: 'center'
          }}
        >
          <Animated.View
            style={{ position: 'absolute', bottom: headerTitleBottom }}
          >
            <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>
              Andrii Bondarenko
            </Text>
          </Animated.View>
        </Animated.View>

        <ScrollView
          style={{ flex: 1 }}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: scrollY } } }
          ])}
        >
          <Animated.View
            style={{
              height: profileImageHeight,
              width: profileImageHeight,
              borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
              borderColor: 'white',
              borderWidth: 3,
              overflow: 'hidden',
              marginTop: profileImageMarginTop,
              marginLeft: 10
            }}
          >
            <Image
              source={require('./assets/test1.jpeg')}
              style={{ flex: 1, width: null, height: null }}
            />
          </Animated.View>
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 26, paddingLeft: 10 }}>
              Andrii Bondarenko
            </Text>
          </View>

          <View style={{ height: 1000 }} />
        </ScrollView>
      </View>
    );
} */

const window = Dimensions.get("window");

HEADER_MAX_HEIGHT = window.height * 0.52;
HEADER_MIN_HEIGHT = window.height * 0.10;

const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;


const App = () => {
  let scrollY = new Animated.Value(0);

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MIN_HEIGHT, HEADER_MAX_HEIGHT],
    extrapolate: 'clamp'
  })

  const profileImageHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MIN_HEIGHT-10, HEADER_MAX_HEIGHT],
    extrapolate: 'clamp'
  })

  const profileImageWidth = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MIN_HEIGHT - 10, window.width],
    extrapolate: 'clamp'
  })

  const profileImageMarginLeft = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [10, 0],
    extrapolate: 'clamp'
  })

  const profileImageMarginTop = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [5, 0],
    extrapolate: 'clamp'
  })

  const profileImageBorderRadius = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [(HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT) / 2, 0],
    extrapolate: 'clamp'
  })

  const descPositionTop = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [15, HEADER_MAX_HEIGHT - 50],
    extrapolate: 'clamp'
  })

  const descPositionLeft = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [80, 12 ],
    extrapolate: 'clamp'
  })
  

  return (
    <View style={styles.container}>
        <Animated.View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0                               
          }}
        > 

        <Animated.View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: 'lightskyblue',
            height: headerHeight,
            opacity: headerOpacity           
          }} 
        />     

          <Animated.Image style={{
              height: profileImageHeight,
              width: profileImageWidth,
              borderRadius: profileImageBorderRadius,              
              overflow: 'hidden',              
              marginLeft: profileImageMarginLeft,
              marginTop: profileImageMarginTop              
            }}
            source={require('./assets/test1.jpeg')}
          />

            <Animated.View style={{
                position: 'absolute',
                top: descPositionTop,
                left: descPositionLeft,
                right: 0,
                zIndex: 1,
                opacity: 1,                
                height: null,
                width: null                          
              }}
            >
                <Text style={styles.name}>
                  Andrey
                </Text>
                <Text style={styles.lastDesc}>
                  Last seen: two days ago
                </Text>
              </Animated.View>
            </Animated.View>

        <Animated.ScrollView 
          scrollEventThrottle={16}
          style={styles.container}
          onScroll={Animated.event(
            [{nativeEvent: { contentOffset: {y: scrollY} } }]            
          )}
        > 
           <View style={{height: 1400}}/>
        </Animated.ScrollView>      
    </View>
  )

}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1    
  },
  name: { 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 20, 
    paddingLeft: 10,
    width: null
  },
  lastDesc: { 
    color: 'white', 
    fontSize: 10, 
    paddingLeft: 10, 
    width: null
  }
});