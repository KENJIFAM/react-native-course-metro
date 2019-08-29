class Place {
  constructor(
    id,
    cityId,
    title,
    imageUrl,
    description,
    shortDescription,
    latitude,
    longitude,
    averageVisitDuration,
    isReligious,
    isNatural,
    isMuseum,
    isPalace,
    isSquare,
    isLandmark
  ) {
    this.id = id;
    this.cityId = cityId;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.shortDescription = shortDescription;
    this.latitude = latitude;
    this.longitude = longitude;
    this.averageVisitDuration = averageVisitDuration;
    this.isReligious = isReligious;
    this.isNatural = isNatural;
    this.isMuseum = isMuseum;
    this.isPalace = isPalace;
    this.isSquare = isSquare;
    this.isLandmark = isLandmark;
  }
}

export default Place;
