import React from 'react';
import { View, Text, Image, TextInput, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const featuredJobs = [
    { id: '1', role: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', logo: require('./images/Vector.png') },
    { id: '2', role: 'Data Scientist', company: 'Google', salary: '$160,000', location: 'New York, USA', logo: require('./images/google.png') },
    { id: '3', role: 'Software Engineer', company: 'Github', salary: '$185,000', location: 'Boston, USA', logo: require('./images/github.jpeg') },
    { id: '4', role: 'Systems Administrator', company: 'AliBaba', salary: '$150,000', location: 'Shangai, China', logo: require('./images/alibaba.jpeg') },
    { id: '5', role: 'Programmer', company: 'Microsoft', salary: '$149,000', location: 'Mississippi, USA', logo: require('./images/microsoft.jpeg') },
    { id: '6', role: 'Social Media Marketer', company: 'Instagram', salary: '$120,000', location: 'Iowa, USA', logo: require('./images/ig.jpeg') },
    { id: '7', role: 'Software Engineer', company: 'Jumia', salary: '$160,000', location: 'Accra, Ghana', logo: require('./images/jumia.jpeg') },
    { id: '8', role: 'Web Developer', company: 'Spotify', salary: '$200,000', location: 'New Jersey, USA', logo: require('./images/spotify.jpeg') },
    // Add more featured jobs as needed with different images
  ];
  
  const popularJobs = [
    { id: '1', role: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', logo: require('./images/burger-king.png') },
    { id: '2', role: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US', logo: require('./images/image 8.png') },
    { id: '3', role: 'Team Coach', company: 'Facebook', salary: '$48,000,000/y', location: 'San Francisco, US', logo: require('./images/goldenstate.jpeg') },
    { id: '4', role: 'Club Manager', company: 'Chelsea FC', salary: '€38,000,000/y', location: 'London, England', logo: require('./images/chelsea.jpeg') },
    { id: '5', role: 'Cook', company: 'KFC', salary: '$69,000/y', location: 'Denver, US', logo: require('./images/kfc.jpeg') },
    { id: '6', role: 'Hardware Engineer', company: 'Apple', salary: '$100,000/y', location: 'Minnesota, US', logo: require('./images/cib_apple.png') },
    { id: '7', role: 'Software Engineer', company: 'Telegram', salary: '$175,000/y', location: 'Dallas, US', logo: require('./images/telegram.jpeg') },
    { id: '8', role: 'Web Developer', company: 'YouTube', salary: '$167,000/y', location: 'Memphis, US', logo: require('./images/youtube.jpeg') },
    // Add more popular jobs as needed with different images
  ];

  const LoginScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const handleLogin = () => {
      // Handle login logic here
      // navigation.navigate
      console.log('Login with', name, email);
    };

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          padding: 20,
          backgroundColor: '#fff',
        },
        title: {
          fontSize: 32,
          fontWeight: 'bold',
          marginBottom: 10,
          color: '#2979ff',
        },
        welcome: {
          fontSize: 24,
          marginBottom: 10,
        },
        subtitle: {
          fontSize: 16,
          marginBottom: 20,
          color: '#555',
        },
        input: {
          borderWidth: 1,
          borderColor: '#ddd',
          padding: 12,
          marginBottom: 15,
          borderRadius: 5,
        },
        loginButton: {
          backgroundColor: '#2979ff',
          padding: 15,
          borderRadius: 5,
          alignItems: 'center',
        },
        buttonText: {
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 16,
        },
        orText: {
          fontSize: 14,
          textAlign: 'center',
          marginBottom: 15,
          color: '#555',
        },
        socialButtons: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 20,
        },
        socialButton: {
          padding: 10,
          borderRadius: 50,
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#fff',
        },
        socialImage: {
          width: 25,
          height: 25,
        },
        register: {
          alignItems: 'center',
        },
        registerText: {
          fontSize: 14,
          color: '#555',
        },
        registerLink: {
          color: '#2979ff',
          fontWeight: 'bold',
        },
      });
      
     
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Jobizz</Text>
        <Text style={styles.welcome}>Welcome Back</Text>
        <Text style={styles.subtitle}>
          Let's log in. Apply to jobs!
        </Text>
  
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={setName}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
  
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
  
        <Text style={styles.orText}>Or continue with</Text>
  
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('./images/cib_apple.png')} style={styles.socialImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('./images/google.png')} style={styles.socialImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('./images/Vector.png')} style={styles.socialImage} />
          </TouchableOpacity>
        </View>
  
        <View style={styles.register}>
          <Text style={styles.registerText}>
            Haven't an account?{' '}
            <Text style={styles.registerLink}>Register</Text>
          </Text>
        </View>
      </View>
    );
  };


  const HomeScreen = () => {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          padding: 16,
          backgroundColor: '#FFFFFF',
          marginTop: 50,
        },
        header: {
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 16,
        },
        userName: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        email: {
          fontSize: 14,
          color: '#666',
        },
        profileImage: {
          width: 40,
          height: 40,
          borderRadius: 20,
          marginLeft: 'auto',
        },
        searchContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#f1f1f1',
          borderRadius: 8,
          paddingHorizontal: 8,
          marginBottom: 16,
        },
        searchInput: {
          flex: 1,
          padding: 8,
        },
        section: {
          marginBottom: 16,
        },
        sectionTitle: {
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 8,
        },
        featuredJobCard: {
          width: 200,
          backgroundColor: '#e9f5fb',
          borderRadius: 8,
          padding: 16,
          marginRight: 8,
        },
        popularJobCard: {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#f1f1f1',
          borderRadius: 8,
          padding: 16,
          marginBottom: 8,
        },
        companyLogo: {
          width: 40,
          height: 40,
          marginRight: 8,
        },
        jobRole: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        jobCompany: {
          fontSize: 14,
          color: '#666',
        },
        jobSalary: {
          fontSize: 14,
          fontWeight: 'bold',
        },
        jobLocation: {
          fontSize: 12,
          color: '#888',
        },
      });

      return (
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.userName}>Eric Atsu</Text>
            
            <Image source={require('./images/Ellipse.png')} style={styles.profileImage} />
          </View>
    
          <View>
          <Text style={styles.email}>eric@gmail.com</Text>
    
          </View>
          <TouchableOpacity>
          <View style={styles.searchContainer}>
            <TextInput style={styles.searchInput} placeholder="Search a job or position" />
          </View>
          </TouchableOpacity>
    
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Featured Jobs</Text>
            <FlatList
              horizontal
              data={featuredJobs}
              renderItem={({ item }) => (
                  <TouchableOpacity>
                <View style={styles.featuredJobCard}>
                  <Image source={item.logo} style={styles.companyLogo} />
                  <Text style={styles.jobRole}>{item.role}</Text>
                  <Text style={styles.jobCompany}>{item.company}</Text>
                  <Text style={styles.jobSalary}>{item.salary}</Text>
                  <Text style={styles.jobLocation}>{item.location}</Text>
                </View>
                  </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>
              <ScrollView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Popular Jobs</Text>
            {popularJobs.map(job => (
              <View key={job.id} style={styles.popularJobCard}>
                <Image source={job.logo} style={styles.companyLogo} />
                <View>
                  <Text style={styles.jobRole}>{job.role}</Text>
                  <Text style={styles.jobCompany}>{job.company}</Text>
                  <Text style={styles.jobSalary}>{job.salary}</Text>
                  <Text style={styles.jobLocation}>{job.location}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        </ScrollView>
      );
    };
  
    const App = () => {
        return (
          <View>
            <HomeScreen />
            
          </View>
        );
      };
      
      export default App;






