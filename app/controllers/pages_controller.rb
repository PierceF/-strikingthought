class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only:[:home, :about]

  # require 'nokogiri'

  # url = "https://www.goodreads.com/search.xml?key=WRvzIEewNhhZlwTPqmN2fA&q=Ender%27s+Game"
  # file      = open(url).read
  # document  = Nokogiri::XML(file)
  # puts document
  # document.root.xpath('beer').each do |beer|
  #   name        = beer.xpath('name').text
  #   appearance  = beer.xpath('appearance').text
  #   origin      = beer.xpath('origin').text




  def home
  end

  def about
  end
end
