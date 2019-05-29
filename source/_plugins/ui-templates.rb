require_relative './url_filters.rb'

module UITemplates
  include CustomURLFilters
  def createChartHtml(number, title, img_src, caption, alt_text, description)

    chart_title = "<div class='figure-number'>Figure #{number}</div> <div class='figure-title'>#{title}</div>"
    chart_description_path = get_relative_url("/figures.html#figure-#{number}")
    chart_img_html = "<img src='#{img_src}' alt='#{alt_text}' longdesc='#{chart_description_path}' />"
    chart_caption = "<figcaption>#{caption}</figcaption>"
    chart_description_link = "<a class='figure-description-link' href='#{chart_description_path}'>Text description of chart</a>"
    chart_description_html = "<div class='figure-description'>#{description} </div>"

    chartHtml = [
      "<div class='chart-container'><figure>",
      chart_title,
      chart_img_html,
      chart_caption,
      chart_description_link,
      "</figure></div>"
    ].join('')

  end
end