package main

/*
This is a simple program that retrieves the vendor permit file from:
https://data.sfgov.org/api/views/rqzj-sfat/rows.csv?accessType=DOWNLOAD

The program writes the contents of the downloaded file to a CSV file on the
filesystem and then converts the CSV rows into a JSON file that matches
the expected format for the Vendors collection in the monogo database.
*/

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"

	"github.com/gocarina/gocsv"
)

type FoodFacilityPermitData struct {
	LocationId          int32   `csv:"locationid"`
	Applicant           string  `csv:"Applicant"`
	FacilityType        string  `csv:"FacilityType"`
	Cnn                 int32   `csv:"-"`
	LocationDescription string  `csv:"LocationDescription"`
	Address             string  `csv:"Address"`
	Blocklot            int32   `csv:"-"`
	Block               int32   `csv:"-"`
	Lot                 int32   `csv:"-"`
	Permit              string  `csv:"permit"`
	Status              string  `csv:"Status"`
	FoodItems           string  `csv:"FoodItems"`
	X                   float32 `csv:"-"`
	Y                   float32 `csv:"-"`
	Latitude            float64 `csv:"Latitude"`
	Longitude           float64 `csv:"Longitude"`
	Schedule            string  `csv:"Schedule"`
	DaysHours           string  `csv:"dayshours"`
	Noisent             string  `csv:"-"`
	Approved            string  `csv:"Approved"`
	Received            int32   `csv:"Received"`
	PriorPermit         int32   `csv:"-"`
	ExpirationDate      string  `csv:"ExpirationDate"`
	Location            string  `csv:"-"`
}

type VendorJsonData struct {
	LocationId          string `json:"locationId"`
	Applicant           string `json:"name"`
	FacilityType        string `json:"facilityType"`
	LocationDescription string `json:"locationDescription"`
	FoodItems           string `json:"foodItems"`
	Latitude            string `json:"latitude"`
	Longitude           string `json:"longitude"`
	DaysHours           string `json:"daysHours"`
}

func DownloadFile(filepath string, fileUrl string) error {
	resp, err := http.Get(fileUrl)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	out, err := os.Create(filepath)
	if err != nil {
		return err
	}
	defer out.Close()

	_, err = io.Copy(out, resp.Body)
	return err
}

func getVendorFile(csvFile string, fileUrl string) error {
	// TODO: This should be a configuration/env variable
	resp, err := http.Get(fileUrl)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	out, err := os.Create(csvFile)
	if err != nil {
		return err
	}
	defer out.Close()

	fmt.Println("Successfully downloaded vendor file!")

	_, err = io.Copy(out, resp.Body)
	return err
}

func parseCSVFile(csvFile string, outFilePath string) error {
	permitsFile, err := os.OpenFile(csvFile, os.O_RDWR|os.O_CREATE, os.ModePerm)
	if err != nil {
		return err
	}
	defer permitsFile.Close()

	permits := []*FoodFacilityPermitData{}
	if err := gocsv.UnmarshalFile(permitsFile, &permits); err != nil {
		return err
	}

	var objs []VendorJsonData
	var facilityType string
	for _, permit := range permits {
		switch permit.FacilityType {
		case "Truck":
			facilityType = "truck"
		case "Push Cart":
			facilityType = "cart"
		default:
			facilityType = "unknown"
		}

		data := VendorJsonData{
			Applicant:           permit.Applicant,
			LocationId:          fmt.Sprint(permit.LocationId),
			FacilityType:        facilityType,
			LocationDescription: permit.LocationDescription,
			FoodItems:           permit.FoodItems,
			Latitude:            fmt.Sprintf("%f", permit.Latitude),
			Longitude:           fmt.Sprintf("%f", permit.Longitude),
			DaysHours:           permit.DaysHours,
		}
		objs = append(objs, data)
	}

	// Convert to JSON
	jsonData, err := json.Marshal(objs)
	if err != nil {
		log.Fatal("Error converting CSV to JSON")
	}

	jsonFile, err := os.Create(outFilePath)
	if err != nil {
		log.Fatal("Error writing JSON to disk")
	}
	defer jsonFile.Close()

	jsonFile.Write(jsonData)
	jsonFile.Close()

	return nil
}

func main() {
	// TODO: Add CLI arguments and prompt for url, and output filename/path to file
	fileUrl := "https://data.sfgov.org/api/views/rqzj-sfat/rows.csv?accessType=DOWNLOAD"
	outFilePath := "../db/data/vendors.json"
	tmpFile := "tmp.csv"

	err := getVendorFile(tmpFile, fileUrl)
	if err != nil {
		log.Fatal("Error downloading permit file")
	}

	err = parseCSVFile(tmpFile, outFilePath)
	if err != nil {
		log.Fatal("Error parsing permit file")
	}

	fmt.Println("Wrote JSON data to: " + outFilePath)

	os.Remove(tmpFile)
}
