<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat color="white">
          <v-btn v-if="userIsAuthenticated" color="primary" dark @click.stop="dialog = true" class="mr-1">
            New Event
          </v-btn>
          <v-btn outlined class="mr-4" @click="setToday">
            Today
          </v-btn>
          <v-btn fab text small @click="prev">
            <v-icon>chevron_left</v-icon>
          </v-btn>
          <v-btn fab text small @click="next" class="mr-2">
            <v-icon>chevron_right</v-icon>
          </v-btn>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu bottom right>
            <template v-slot:activator="{ on }">
              <v-btn
                outlined
                v-on="on"
              >
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>arrow_drop_down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Day</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Week</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Month</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 days</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>

      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-container>
            <v-form @submit.prevent="addEvent">
              <v-row align="center">
                <v-col class="d-flex" cols="12">
                  <v-select
                    :items="classLabels"
                    item-text="title"
                    label="Class Type"
                    v-model="name"
                    @input="checkWorkshop()"
                  ></v-select>
              </v-col>
              </v-row>
              <v-text-field v-model="className" type="text" label="Class Name"></v-text-field>
              <v-text-field v-model="details" type="text" label="Details"></v-text-field>
              <v-text-field v-model="location" type="text" label="Location"></v-text-field>
              <v-row align="center" justify="space-around">
                <!-- start date picker -->
                <v-col cols="12" sm="6" md="4">
                  <v-datetime-picker label="Start Data/Time" v-model="start"></v-datetime-picker>
                </v-col>
                <v-spacer></v-spacer>
                <!-- end date picker -->
                <v-col cols="12" sm="6" md="4">
                  <v-datetime-picker label="End Data/Time" v-model="end"></v-datetime-picker>
                </v-col>
              </v-row>
              <v-row align="center" class="mx-1" v-if="workshopSelected">
                <v-file-input
                  v-model="files"
                  placeholder="Upload your photos"
                  label="Photo Upload"
                  prepend-icon="mdi-camera"
                  @change="onFilePicked"
                >
                  <template v-slot:selection="{ text }">
                    <v-chip
                      small
                      label
                      color="primary"
                    >
                      {{ text }}
                    </v-chip>
                  </template>
                </v-file-input>
              </v-row>
              <!-- <v-row>
                <v-img :src="imgUrl" height="150px"></v-img>
              </v-row> -->
              <v-btn type="submit" color="primary" class="mr-4" @click.stop="dialog = false">
                Create Event
              </v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>

      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :event-margin-bottom="3"
          :now="today"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
          @change="updateRange"
        ></v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card
            color="grey lighten-4"
            min-width="350px"
            flat
          >
            <v-toolbar
              :color="selectedEvent.color"
              dark
            >
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <div v-if="userIsAuthenticated">
                <v-btn icon v-if="currentlyEditing !== selectedEvent.id" text @click.prevent="editEvent(selectedEvent)">
                  <v-icon>edit</v-icon>
                </v-btn>
                <v-btn icon @click="deleteEvent(selectedEvent.id)">
                  <v-icon>delete</v-icon>
                </v-btn>
              </div>
            </v-toolbar>
            <v-card-text>
              <!-- Class Name -->
              <form v-if="currentlyEditing !== selectedEvent.id">
                <v-icon small class="mr-1">star</v-icon>
                <strong>{{ selectedEvent.className }}</strong>
              </form>
              <form v-else>
                <v-icon small class="mr-1">star</v-icon>
                <textarea-autosize
                  v-model="selectedEvent.className"
                  type="text"
                  style="width: 100%"
                  :min-height="40"
                  placeholder="add note">
                </textarea-autosize>
              </form>
              <br>
              <!-- class details -->
              <form class="mr-1" v-if="currentlyEditing !== selectedEvent.id">
                <v-icon small class="mr-1">info</v-icon>
                {{ selectedEvent.details }}
              </form>
              <form v-else>
                <v-icon small class="mr-1">info</v-icon>
                <textarea-autosize
                  v-model="selectedEvent.details"
                  type="text"
                  style="width: 100%"
                  :min-height="40"
                  placeholder="Add Details">
                </textarea-autosize>
              </form>
              <br>
              <!-- class time -->
              <form v-if="currentlyEditing !== selectedEvent.id">
                <v-icon small>access_time</v-icon>
                {{ selectedEvent.timeRange }}
              </form>
              <form v-else>
                <v-icon small>access_time</v-icon>
                <textarea-autosize
                  readonly
                  type="text"
                  style="width: 100%"
                  :min-height="40"
                  placeholder="Cannot edit date/time. Please delete and create new event.">
                </textarea-autosize>
              </form>
              <br>
              <!-- class location -->
              <form v-if="currentlyEditing !== selectedEvent.id">
                <v-icon small>room</v-icon>
                {{ selectedEvent.location }}
              </form>
              <form v-else>
                <v-icon small>room</v-icon>
                <textarea-autosize
                  v-model="selectedEvent.location"
                  type="text"
                  style="width: 100%"
                  :min-height="40"
                  placeholder="add note">
                </textarea-autosize>
              </form>
            </v-card-text>
            <v-card-actions>
              <v-btn text v-if="currentlyEditing === selectedEvent.id" type="submit" @click.prevent="updateEvent(selectedEvent)">
                Save
              </v-btn>
              <v-btn text @click="selectedOpen = false">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
  import { db } from '@/main'
  import Vue from 'vue'
  import DatetimePicker from 'vuetify-datetime-picker'
  import * as firebase from 'firebase'
 
  Vue.use(DatetimePicker)

  export default {
    data: () => ({
      imageUrl: '',
      image: null,
      files: [],
      today: new Date().toISOString().substr(0, 10),
      focus: new Date().toISOString().substr(0, 10),
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      classLabels: [
        {title: 'Melt', color: '#0e7e8f'},
        {title: 'Melt Workshop', color: '#09515C'},
        {title: 'Yoga', color: '#21295C'},
        {title: 'Yoga Workshop', color: '#1C224C'},
      ],
      name: null,
      className: null,
      details: null,
      location: null,
      start: null,
      end: null,
      timeRange: null,
      color: "#0e7e8f", // default event color
      currentlyEditing: null,
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      dialog: false,
      dialogDate: false,
      startTimeMenu: false,
      endTimeMenu: false,
      timePicker: false,
      workshopSelected: false,
    }),
    computed: {
      title () {
        const { start, end } = this
        if (!start || !end) {
          return ''
        }

        const startMonth = this.monthFormatter(start)
        const endMonth = this.monthFormatter(end)
        const suffixMonth = startMonth === endMonth ? '' : endMonth

        const startYear = start.year
        const endYear = end.year
        const suffixYear = startYear === endYear ? '' : endYear

        const startDay = start.day + this.nth(start.day)
        const endDay = end.day + this.nth(end.day)

        switch (this.type) {
          case 'month':
            return `${startMonth} ${startYear}`
          case 'week':
          case '4day':
            return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
          case 'day':
            return `${startMonth} ${startDay} ${startYear}`
        }
        return ''
      },
      monthFormatter () {
        return this.$refs.calendar.getFormatter({
          timeZone: 'UTC', month: 'long',
        })
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    mounted () {
      this.getEvents()
    },
    methods: {
      onFilePicked() {
        //eslint-disable-next-line no-console
        console.log(this.files.blob);

        let filename = this.files.name
        if (filename.lastIndexOf('.') <= 0){
          return alert("Please choose a valid file!")
        }
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          //eslint-disable-next-line no-console
          //console.log(fileReader.result);
          this.imageUrl = fileReader.result
        })
        fileReader.readAsDataURL(this.files)
        this.image = this.files
      },
      getEvents () {
        const events = []
        db.collection('classes').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let appData = doc.data()
            appData.id = doc.id
            events.push(appData)
          });
          this.events = events
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log('Error getting documents', err);
        });
      },
      async addEvent () {
        var tzoffset = (new Date()).getTimezoneOffset() * 60000
        //eslint-disable-next-line no-console
        var files = this.files
        var id

        if (this.name && this.start && this.end) {
          // push string data to firestore
          await db.collection("classes").add({
            name: this.name,
            className: this.className,
            details: this.details,
            location: this.location,
            start: (new Date (this.start - tzoffset)).toISOString().substr(0, 16).replace('T', ' '),
            end: (new Date (this.end - tzoffset)).toISOString().substr(0, 16).replace('T', ' '),
            timeRange: this.start.getHours() + ":" + (this.start.getMinutes() < 10 ? '0' : '') + this.start.getMinutes() + " - " + this.end.getHours() + ":" + (this.end.getMinutes() < 10 ? '0' : '') + this.end.getMinutes(),
            color: this.classLabels.find(o => o.title === this.name).color,
          })
          // push image to database
          .then(function(docRef) {
            id = docRef.id
            //let ext = files.name.slice(files.name.lastIndexOf('.'))
            return firebase.storage().ref('workshops/' + id).put(files)
          })
          // reset values
          this.getEvents()
          this.name = '',
          this.className = '',
          this.details = '',
          this.start = '',
          this.end = '',
          this.timeRange = '',
          this.color = ''

        } else {
          alert('You must enter event name, start, and end time')
        }
      },
      editEvent (ev) {
        this.currentlyEditing = ev.id
      },
      async updateEvent (ev) {
        await db.collection('calEvent').doc(this.currentlyEditing).update({
          className: ev.className,
          details: ev.details,
          start: ev.start,
          end: ev.start,
          location: ev.location
        })
        this.selectedOpen = false,
        this.currentlyEditing = null
      },
      async deleteEvent (ev) {
        await db.collection("classes").doc(ev).delete()
        this.selectedOpen = false,
        this.getEvents()
      },
      checkWorkshop(){
        // eslint-disable-next-line no-console
        console.log("getting here " + this.name)
        if (this.name === "Yoga Workshop" || this.name === "Melt Workshop"){
          this.workshopSelected = true
        } 
        return this.workshopSelected
      },
      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = this.today
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          setTimeout(() => this.selectedOpen = true, 10)
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          setTimeout(open, 10)
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
      updateRange ({ start, end }) {
        // You could load events from an outside source (like database) now that we have the start and end dates on the calendar
        this.start = start
        this.end = end
      },
      nth (d) {
        return d > 3 && d < 21
          ? 'th'
          : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
      },
    },
  }
</script>