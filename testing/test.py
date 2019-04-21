import unittest
from selenium import webdriver

PATH_TO_CHROMEDRIVER = '/Users/jacksontsoi/Downloads/chromedriver'
TESTING_WEBSITE = 'http://localhost:3000/'


class TestWebsite(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome(PATH_TO_CHROMEDRIVER)

    def test_visit_website(self):
        self.driver.get(TESTING_WEBSITE)

    def test_find_website_title(self):
        self.driver.get(TESTING_WEBSITE)
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div[1]/header/div/h6')
        
    def test_correct_website_title(self):
        self.driver.get(TESTING_WEBSITE)
        self.assertEqual('Benchmarks Analytics Dashboard', self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div[1]/header/div/h6').text)

    def test_sorting_branches(self):
        self.driver.get(TESTING_WEBSITE)
        first_branch_result_path = '//*[@id="root"]/div/div/div[2]/div/div/div[1]/div/div[3]/div[2]/div/div/div[1]/div[4]'
        original_branch =  self.driver.find_element_by_xpath(first_branch_result_path).text
        branch_button = self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div[2]/div/div/div[1]/div/div[1]/div[2]/div/div/div[4]')

        # sort branch ascending alphabetically and check if first branch is development
        branch_button.click()
        self.assertEqual('development', self.driver.find_element_by_xpath(first_branch_result_path).text)

        # sort branch descending alphabetically and check if first branch is staging
        branch_button.click()
        self.assertEqual('staging', self.driver.find_element_by_xpath(first_branch_result_path).text)

        # unsort branch and if first branch is same as the orginal recorded branch
        branch_button.click()
        self.assertEqual(original_branch, self.driver.find_element_by_xpath(first_branch_result_path).text)


    def tearDown(self):
        self.driver.quit()


if __name__ == "__main__":
    unittest.main(verbosity=2)